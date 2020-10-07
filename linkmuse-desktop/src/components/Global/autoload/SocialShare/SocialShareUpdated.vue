<template>
  <button :class="['d-btn', 'd-btn_secondary_filled', 'd-btn_share', { 'd-btn_share_active': active }, {'d-btn_hover': hover}]" @click="_handleClickToggleShare" v-click-outside="_handleClickOutsideShare">
      <slot></slot>
      <div :class="['d-btn__popup', 'd-btn__popup_share', { clipboard_bottom: (url && clipboard && (position === 'bottom')), 'd-btn__popup_top': (position === 'top') ,'d-btn__popup_active': active }]">
        <template v-if="(url && clipboard)">
          <div :class="['d-btn__popup_share-wrap']">
            <a href="javascript:void(0)" @click="_handleClickClip"><span>Скопировать</span></a>
          </div>
        </template>

        <social-sharing :url="url" :title="title" :description="description" :quote="quote" :media="media" v-cloak inline-template>
          <div :class="['d-btn__popup_share-wrap']">
            <a href="javascript:void(0)"><network network="vk">Вконтакте</network></a>
            <a href="javascript:void(0)"><network network="facebook">Фейсбук</network></a>
            <a href="javascript:void(0)"><network network="twitter">Твиттер</network></a>
          </div>
        </social-sharing>
        <div class="d-btn__popup-stub"></div>
      </div>
  </button>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'bottom'
    },
    url: {
      type: String
    },
    title: {
      type: String,
      default: "LinkMuse"
    },
    description: {
      type: String,
      default: "ALL MUSES LINKED. EVERY TALENT COUNTS."
    },
    quote: {
      type: String,
      default: "ALL MUSES LINKED. EVERY TALENT COUNTS."
    },
    hashtags: {
      type: String
    },
    media: {
      type: String
    },
    clipboard: {
      type: Boolean,
      default: false
    },
    hover: {
        type: Boolean,
        default: true
    },
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    _handleClickToggleShare () {
      if (this.hover) return;

      this.active = !this.active
    },
    _handleClickOutsideShare () {
      this.active = false
    },
    _handleClickClip () {
      this.$copyText(this.url).then((e) => {
        this.$notify({ type: 'success', title: 'Успешно', text: 'Ссылка успешно скопирована.' })
        this.$nextTick(() => this.active = false)
      }, (e) => {
        this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
        this.$nextTick(() => this.active = false)
      })
    }
  }
}
</script>

<style lang="scss">
  .d-btn__popup_share-wrap {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
</style>
