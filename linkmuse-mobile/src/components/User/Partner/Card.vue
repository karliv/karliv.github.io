<template>
  <div class="lm-m-response-page-user-item">
    <div class="lm-m-user-item-head">
      <div class="left">
        <div class="lm-user-block">
          <router-link :to="{ name: 'user.show', params: { username: user.username } }">
            <img :src="user.avatar" :class="['lm-user-block-avatar']" :alt="user.name">
            <div class="lm-user-block-info">
              <div class="lm-user-block-info-name"><span>{{ user.name | truncate(50) }}</span></div>
              <div class="lm-user-block-info-type" v-if="(Array.isArray(user.category) && user.category.length)">
                {{ user.category.join(', ') }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="right">
        <div v-if="authUser.id !== user.user_id" class="lm-message-button" @click="_handleClickOpenMessagePage"></div>
      </div>
    </div>
    <div class="lm-m-partner-list--item-footer" v-if="user.exclusive === 1">
      <div class="lm-m-partner-list--item-footer--wrap">
        <span>Эксклюзивный партнер</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        has,
        sheet: {
          actions: []
        },
        swiped: false
      }
    },
    computed: {
      ...mapGetters({
        authUser: 'auth/getAuthUser',
        authRole: 'auth/getRole',
      }),
      portfolio () {
        return has(this.user.portfolio, 'data.id') ? this.user.portfolio.data : null
      }
    },
    methods: {
      _handleClickCallPhone () {
        if (!this.phone) return false
        window.open(`tel:${this.phone}`, '_self')
      },
      _handleClickOpenMessagePage () {
        let uid = this._.sortBy([ this.user.user_id, this.authUser.id ]).toString()
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
    }
  }
</script>

<style lang="sass">
  .lm-m-partner-list--item-footer
    padding: 0 16px
    &--wrap
      border-top: 1px solid #f3f4f6
      height: 40px
      display: flex
      align-content: center
      align-items: center
      justify-content: center
      text-align: center
      span
        font-size: 12px
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: 1.29
        letter-spacing: normal
        color: #808792
        text-transform: uppercase
</style>
