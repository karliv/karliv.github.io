<template>
  <div>
    <div @click="_handleClickOpenActionSheet">
      <slot></slot>
    </div>

    <actionsheet-custom-template v-model="sheet.value" cancel-text="" :lockScroll="true">
      <social-sharing :url="url" :title="title" :description="description" :quote="quote" :media="media" v-cloak inline-template>
        <ul class="mint-actionsheet-list lm-m-modal-list-menu" :style="{ 'margin-bottom': '0' }">
          <li class="mint-actionsheet-listitem lm-m-modal-list-menu--item" :style="{ 'color': 'inherit' }">
            <network network="vk">Вконтакте</network>
          </li>
          <li class="mint-actionsheet-listitem lm-m-modal-list-menu--item" :style="{ 'color': 'inherit' }">
            <network network="facebook">Facebook</network>
          </li>
          <li class="mint-actionsheet-listitem lm-m-modal-list-menu--item" :style="{ 'color': 'inherit' }">
            <network network="twitter">Twitter</network>
          </li>
        </ul>
      </social-sharing>
    </actionsheet-custom-template>
  </div>
</template>

<script>
  export default {
    props: {
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
      }
    },
    data () {
      return {
        sheet: {
          value: false
        }
      }
    },
    methods: {
      _handleClickOpenActionSheet (event) {
        event.preventDefault()
        this.sheet.value = true
      }
    }
  }
</script>

<style scoped>

</style>
