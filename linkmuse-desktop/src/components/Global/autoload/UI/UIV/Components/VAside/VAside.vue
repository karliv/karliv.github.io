<template>
    <div tabindex="-1" @click.self="backdropClicked">
        <transition :name="`slide${placement}`">
            <div class="aside" v-if="value" :style="{ width: `${width}px` }" :class="placement">
                <div class="aside-dialog">
                    <div class="aside-content">
                        <div class="aside-header">
                            <button type="button" class="close" @click="trigger_close()"><span>&times;</span></button>
                            <h4 class="aside-title"><slot name="header">{{ header }}</slot></h4>
                        </div>
                        <div class="aside-body"><slot></slot></div>
                    </div>
                </div>
            </div>
        </transition>
        <div ref="backdrop" class="aside-backdrop"></div>
    </div>
</template>
<script>
import {
  on,
  off,
  addClass,
  removeClass,
  removeFromDom,
  toggleBodyOverflow,
  _getScrollbarWidth,
  getComputedStyle
} from '@utils'

const IN = 'in'

const getOpenModalNum = () => (typeof document === 'undefined') ? 0 : document.querySelectorAll(`.${MODAL_BACKDROP}`).length

export default {
  props: {
    header: {
      type: String
    },
    placement: {
      type: String,
      default: 'right'
    },
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 320
    }
  },
  data () {
    return {
      timeoutId: 0,
      transitionDuration: 150
    }
  },
  watch: {
    value (val, old) {
      if (typeof document === 'undefined') return

      this.$emit('input', val)
      this.$emit(this.value ? 'open' : 'close')

      const aside = this.$el
      const backdrop = this.$refs.backdrop
      clearTimeout(this.timeoutId)

      if (val) {
        const alreadyOpenModalNum = getOpenModalNum()
        document.body.appendChild(backdrop)
        document.body.appendChild(aside)

        backdrop.offsetHeight // force repaint
        toggleBodyOverflow(false)
        addClass(backdrop, IN)
      } else {
        removeClass(backdrop, IN)

        this.timeoutId = setTimeout(() => {
          removeFromDom(backdrop)
          removeFromDom(aside)
          if (getOpenModalNum() === 0) {
            toggleBodyOverflow(true)
          }
        }, this.transitionDuration)
      }
    }
  },
  mounted () {
    removeFromDom(this.$refs.backdrop)
    this.$emit('trigger', () => this.trigger)
  },
  beforeDestroy () {
    removeFromDom(this.$refs.backdrop)
  },
  methods: {
    trigger () {
      return {
        close: () => this.trigger_close(),
        open: () => this.trigger_open()
      }
    },
    trigger_close () {
      this.$emit('close')
    },
    trigger_open () {
      this.$emit('open')
    },
    backdropClicked (event) {
      this.trigger_close()
    }
  }
}
</script>
<style>
.aside-open {
  transition: transform 0.3s;
}
.aside-open.has-push-right {
  transform: translateX(-300px);
}
.aside {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1049;
  overflow: auto;
  background: #fff;
}
.aside.left {
  left: 0;
  right: auto;
}
.aside.right {
  left: auto;
  right: 0;
}
.slideleft-enter {
  transform:translateX(-100%);
}
.slideleft-enter-active {
  animation:slideleft-in .3s;
}
.slideleft-leave-active {
  animation:slideleft-out .3s;
}
@keyframes slideleft-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideleft-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
.slideright-enter-active {
  animation:slideright-in .3s;
}
.slideright-leave-active {
  animation:slideright-out .3s;
}
@keyframes slideright-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideright-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
.aside:focus {
    outline: 0;
}
@media (max-width: 991px) {
  .aside {
    min-width: 240px;
  }
}
.aside .aside-dialog .aside-header {
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.43px;
  padding: 6px 15px;
  background: #337ab7;
  color: #fff;
}
.aside .aside-dialog .aside-header .close {
  margin-right: -8px;
  padding: 4px 8px;
  color: #fff;
  font-size: 25px;
  opacity: .8;
}
.aside .aside-dialog .aside-body {
  position: relative;
  padding: 15px;
}
.aside .aside-dialog .aside-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.aside .aside-dialog .aside-footer .btn+.btn {
  margin-left: 5px;
  margin-bottom: 0;
}
.aside .aside-dialog .aside-footer .btn-group .btn+.btn {
  margin-left: -1px;
}
.aside .aside-dialog .aside-footer .btn-block+.btn-block {
  margin-left: 0;
}
.aside-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  opacity: 0;
  transition: opacity .3s ease;
  background-color: #000;
}
.aside-backdrop.in {
  opacity: .5;
  filter: alpha(opacity=50);
}
</style>
