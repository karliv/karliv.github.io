<template>
  <div tabindex="-1" role="dialog" class="modal" :class="{fade:transitionDuration>0}" @click.self="backdropClicked">
    <div ref="dialog" class="modal-dialog" :class="modalSizeClass" role="document">
      <slot/>
    </div>
    <div ref="backdrop" class="modal-backdrop" :class="{fade:transitionDuration>0}"></div>
  </div>
</template>

<script>
import { Modal } from 'uiv'

import {
  removeFromDom,
  toggleBodyOverflow,
  addClass,
  removeClass,
  getComputedStyle
} from 'uiv/src/utils/domUtils'

const MODAL_BACKDROP = 'modal-backdrop'
const IN = 'in'
const getOpenModalNum = () => (typeof document === 'undefined') ? 0 : document.querySelectorAll(`.${MODAL_BACKDROP}`).length

export default {
  mixins: [Modal],
  methods: {
    $toggle (show) {
      if (typeof document === 'undefined') return

      const modal = this.$el
      const backdrop = this.$refs.backdrop
      clearTimeout(this.timeoutId)
      if (show) {
        const alreadyOpenModalNum = getOpenModalNum()
        document.body.appendChild(backdrop)
        if (this.appendToBody) {
          document.body.appendChild(modal)
        }
        modal.style.display = 'block'
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.scrollTop = 0
        backdrop.offsetHeight // force repaint
        // try {
        //   this.$root._setScrollbar()
        // } catch (e) {
        //   console.log('Error $root')
        // }

        toggleBodyOverflow(false)

        addClass(backdrop, IN)
        addClass(modal, IN)
        // fix z-index for nested modals
        // no need to calculate if no modal is already open
        if (alreadyOpenModalNum > 0) {
          const modalBaseZ = parseInt(getComputedStyle(modal).zIndex) || 1050 // 1050 is default modal z-Index
          const backdropBaseZ = parseInt(getComputedStyle(backdrop).zIndex) || 1040 // 1040 is default backdrop z-Index
          const offset = alreadyOpenModalNum * this.zOffset
          modal.style.zIndex = `${modalBaseZ + offset}`
          backdrop.style.zIndex = `${backdropBaseZ + offset}`
        }
        // z-index fix end
        this.timeoutId = setTimeout(() => {
          if (this.autoFocus) {
            let btn = this.$el.querySelector('[data-action="auto-focus"]')
            if (btn) {
              btn.focus()
            }
          }
          this.$emit('show')
          this.timeoutId = 0
        }, this.transitionDuration)
      } else {
        removeClass(backdrop, IN)
        removeClass(modal, IN)
        this.timeoutId = setTimeout(() => {
          modal.style.display = 'none'
          removeFromDom(backdrop)
          if (this.appendToBody) {
            removeFromDom(modal)
          }
          if (getOpenModalNum() === 0) {
            // try {
            //   this.$root._resetScrollbar()
            // } catch (e) {
            //   console.log('Error $root')
            // }
            toggleBodyOverflow(true)
          }
          this.$emit('hide', this.msg || 'dismiss')
          this.msg = ''
          this.timeoutId = 0
          // restore z-index for nested modals
          modal.style.zIndex = ''
          backdrop.style.zIndex = ''
          // z-index fix end
        }, this.transitionDuration)
      }
    }
  }
}
</script>

<style>
.modal-center.modal {
    text-align: center;
    padding: 0 !important;
}

.modal-center.modal:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -4px;
}

.modal-center .modal-dialog {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
}
.modal-backdrop {
    z-index: 99997;
}
</style>
