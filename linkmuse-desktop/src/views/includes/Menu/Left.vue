<template>
  <transition name="lm-show-left-menu">
    <aside tabindex="-1" role="sidebar" v-if="value">
      <a href="/" class="logo-left-menu">
        <img src="/dist/img/logo-svg.svg" alt="linkmuse">
      </a>

      <div class="left-menu--item-wrap" v-if="user">
        <a :href="user.href" class="left-menu--item home">Моя страница</a>
      </div>

      <div class="left-menu--item-wrap">
        <a href="/messages" class="left-menu--item message-menu">Сообщения</a>
      </div>

      <div class="left-menu--item-wrap">
        <a href="/notifications" class="left-menu--item notificate-menu" id="step-global-5">Уведомления</a>
      </div>

      <div class="left-menu--item-wrap">
        <template v-if="isExecutor">
          <router-link class="left-menu--item notificate-menu" :to="{ name: 'certifying.executor.index' }">Верификация</router-link>
        </template>
        <template v-if="isCustomer">
          <router-link class="left-menu--item notificate-menu" :to="{ name: 'certifying.customer.index' }" v-if="!is_certifying_specialist">Верификация</router-link>
          <router-link class="left-menu--item notificate-menu" :to="{ name: 'certifying.customer.orders.index' }" v-else-if="is_certifying_specialist">Верификация</router-link>
        </template>
      </div>

      <div class="left-menu--item-wrap" v-if="isExecutor">
        <router-link class="left-menu--item notificate-menu" :to="{ name: 'certifying.executor.orders.index' }">Мои заказы</router-link>
      </div>
    </aside>
  </transition>
</template>

<script>
import {
  on,
  off,
  addClass,
  removeClass,
  removeFromDom,
  toggleBodyOverflow
} from '@utils'

import { mapGetters } from 'vuex'

const IN = 'in'
const MIN_WIDTH = 1279
const MODAL_BACKDROP = 'modal-backdrop'

const getOpenModalNum = () => ((typeof document === 'undefined')) ? 0 : document.querySelectorAll(`.${MODAL_BACKDROP}`).length

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      backdropShow: true
    }
  },
  created () {
    if (typeof window === 'undefined') return
    window.addEventListener('resize', this._handleWindowResize)
  },
  mounted () {
    this._handleWindowResize()
  },
  beforeDestroy () {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', this._handleWindowResize)
    this.$nextTick(() => {
      this.$toggle(false)
    })
  },
  watch: {
    value (v, o) {
      if (v !== o) this.$toggle(v)
    }
  },
  computed: {
    ...mapGetters({
      role: 'auth/getRole',
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized'
    }),
    isCustomer () {
      return (this.role === 'customer')
    },
    isExecutor () {
      return (this.role === 'executor')
    },
    is_certifying_specialist () {
      return (this.isCustomer && this.user && this.user['certifying_specialist_status'] === 'activated')
    }
  },
  methods: {
    _handleWindowResize () {
      if (typeof window === 'undefined') return
      if (window.innerWidth > MIN_WIDTH) {
        this.backdropShow = false
        this.$emit('input', true)
      } else {
        this.backdropShow = true
        this.$emit('input', false)
      }
    },
    $toggle (show) {
      if (!this._backdrop) {
        this._backdrop = document.createElement('div')
        addClass(this._backdrop, MODAL_BACKDROP)
      }

      const aside = this.$el
      const alreadyOpenModalNum = getOpenModalNum()
      let backdrop = this._backdrop

      if (show) {
        if (this.backdropShow) {
          document.body.appendChild(backdrop)

          on(backdrop, 'click', () => this.backdropClicked())
          backdrop.offsetHeight
          toggleBodyOverflow(false)
          addClass(backdrop, IN)

          if (alreadyOpenModalNum > 0) {
            const asideBaseZ = parseInt(getComputedStyle(aside).zIndex) || 1050 // 1050 is default modal z-Index
            const backdropBaseZ = parseInt(getComputedStyle(backdrop).zIndex) || 1040 // 1040 is default backdrop z-Index
            const offset = alreadyOpenModalNum * this.zOffset
            aside.style.zIndex = `${asideBaseZ + offset}`
            backdrop.style.zIndex = `${backdropBaseZ + offset}`
          }
        }
      } else {
        if (this.backdropShow) {
          off(backdrop, 'click')
          removeClass(backdrop, IN)
          removeFromDom(backdrop)

          if (getOpenModalNum() === 0) {
            toggleBodyOverflow(true)
          }

          // restore z-index for nested modals
          aside.style.zIndex = ''
          backdrop.style.zIndex = ''
          // z-index fix end
        }
      }
    },
    backdropClicked () {
      this.$emit('input', false)
    }
  }
}
</script>
