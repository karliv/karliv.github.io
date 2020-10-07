<template>
  <a class="show-actions" href="javascript:void(0)">
    <i class="icon-share">
      <div class="actions-item">
        <social-sharing :url="url"
                        :title="title"
                        :description="description"
                        :quote="quote"
                        :media="media"
                        v-cloak inline-template>
          <div>
            <ul>
              <li>
                <network network="vk">
                  <i class="fa fa-vk"></i> VK
                </network>
              </li>
              <li>
                <network network="facebook">
                  <i class="fa fa-facebook"></i> Facebook
                </network>
              </li>
              <li>
                <network network="twitter">
                  <i class="fa fa-twitter"></i> Twitter
                </network>
              </li>
            </ul>
          </div>
        </social-sharing>
      </div>
    </i>
  </a>
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
