<template>
  <div :class="['message', { 'not_read': (isNotRead), 'error': error }]">
    <div class="message--header">
      <router-link :to="{ name: 'user.show', params: { username: sender.username } }">
        <div class="img" :style="{ backgroundImage: 'url(' + sender.avatar + ')' }"></div>
        <div class="name">{{ sender.name }}</div>
      </router-link>

      <div class="time">{{ message['sent_time'] }}</div>

      <div title="Удалить" class="close icon-Add" @click="_handleClickRemoveMessage"></div>
      <div class="error-wrp" v-if="error">
        <div class="error" @click="_handleClickError">!</div>
      </div>
    </div>
    <div class="text">
      <span v-if="text" v-html="text"></span>
      <template v-if="thumbsAttachments.length > 0">
        <div class="attachments_block video--items-big">
          <template v-for="item in thumbsAttachments">
            <template v-if="item.type === 'photo'">
              <media :media="item" type="photo" :src="item.path" :album="`messageDialog-${dialogId}`">
                <img :src="item['path_260']" :alt="item.description">
              </media>
            </template>
            <template v-if="item.type === 'video'">
              <media :media="item" type="video" class="video--item-big video video-icon"
                     :player="item.player" :album="`messageDialog-${dialogId}`">
                <div>
                  <div>
                    <object>
                      <a href="javascript:void(0)">
                        <img :src="item['cover_image']" :alt="item.title">
                        <div class="video--item-big-play icon-play-button"></div>
                        <div class="video--item-big-title">
                          <div class="name">{{ item.title }}</div>
                        </div>
                        <div class="video--item-big-counts">
                          <div class="video--item-big-like icon-heard">
                            <span>0</span>
                          </div>
                          <div class="video--item-big-comment icon-Mess">
                            <span>0</span>
                          </div>
                        </div>
                        <div class="time">{{ item.duration }}</div>
                      </a>
                    </object>
                  </div>
                </div>
              </media>
            </template>
          </template>
          <div style="flex: auto;"></div>
        </div>
      </template>
      <template v-if="otherAttachments.length > 0">
        <div style="display: flex; flex-wrap: wrap; margin-top: 20px">
          <div class="files flex-start-center" style="width: 40%;" v-for="item in otherAttachments">
            <a :href="item.path" download>
              <file-type class="document" :label="item.extension.toUpperCase()"></file-type>
              <div style="text-align: left; width: 160px; display: inline-block;">
                <div class="files--name">{{ item.description }}</div>
                <div class="files--size">{{ humanFileSize(item.size) }}</div>
              </div>
            </a>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { humanFileSize } from '@utils'

  export default {
    props: {
      message: {
        type: Object,
        required: true
      },
      dialogId: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser'
      }),
      isFromMe () {
        return (this.message['from_id'] === this.user.id)
      },
      isNotRead () {
        return (this.message['read'] === false)
      },
      text () {
        let { text } = this.message;

        let allowed = ['span']

        if (this.message['is_html']) {
          allowed = [...allowed, 'ul', 'li', 'b', 'h3', 'ol', 'p', 'a']
        }

        if (text) {
          text = this.$striptags(text, allowed); // Removed all tags
          text = this.$nl2br(text); // nl2br to <br>
          text = this.$emoji(text); // :emoji: to <img>
          text = this.$anchorme(text); // find link and to <a>
        }

        return text;
      },
      error () {
        return this.message.error || false
      },
      thumbsAttachments () {
        return this.message.attachments.filter((item) => {
          return ((item.type === 'photo') || (item.type === 'video'))
        })
      },
      otherAttachments () {
        return this.message.attachments.filter((item) => {
          return ((item.type === 'document'))
        })
      },
      sender () {
        return this.message.from
      }
    },
    methods: {
      humanFileSize (size) {
        return humanFileSize(size)
      },
      _handleClickRemoveMessage () {
        let { id, uuid } = this.message
        this.$confirm({
          title: this.$t('dialogs.delete-messages.delete-message'),
          message: this.$t('dialogs.delete-messages.sure'),
        }).then((args) => {
          this.$emit('remove', id, uuid ? uuid: false)
        }).catch((args) => {});
      },
      _handleClickError () {
        this.$emit('error', this.message.uuid)
      }
    }
  }
</script>

<style scoped>

</style>
