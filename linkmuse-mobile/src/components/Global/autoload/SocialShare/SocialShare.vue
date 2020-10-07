<template>
  <div class="share-wrapper">
    <i class="lm-share"></i>
    <social-sharing :url="url" :title="title" :description="description" :quote="quote" :media="media" v-cloak inline-template>
      <div class="lm-social">
        <network network="vk">
          <a href="javascript:void(0)" class="lm-social-vk"></a>
        </network>
        <network network="facebook">
          <a href="javascript:void(0)" class="lm-social-fb"></a>
        </network>
        <network network="twitter">
          <a href="javascript:void(0)" class="lm-social-twitter"></a>
        </network>
      </div>
    </social-sharing>
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
  }
}
</script>
<style lang="sass">
  .share-wrapper
    display: flex
    align-items: center
</style>
