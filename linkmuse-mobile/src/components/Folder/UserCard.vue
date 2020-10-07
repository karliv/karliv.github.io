<template>
  <div class="lm-m-folder-page-user-item">
    <div class="lm-m-user-item-head">
      <div class="w_100">
        <div class="lm-user-block">
          <router-link :to="{ name: 'user.show', params: { username: user.username } }">
            <img :src="user.avatar" :class="['lm-user-block-avatar']" :alt="user.name">
            <div class="lm-user-block-info">
              <div class="lm-user-block-info-name"><span>{{ user.name | truncate(50) }}</span></div>
              <div class="lm-user-block-info-type" v-if="(Array.isArray(user.category) && user.category.length)">
                {{ user.category.join(', ') | truncate(18) }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="w_auto">
        <button @click="_handleClickActionSheet" class="btn btn_plus">
          <svg class="icon icon_size_16">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      },
    },
    methods: {
      _handleClickActionSheet () {
        this.$emit('actionSheet', this.user['id'])
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lm-m-folder-page-user-item {
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    border-top: 12px solid #f3f4f6;

    .lm-m-user-item-head {
      padding: 16px;
      display: flex;
      max-width: 100%;
      align-items: center;
      justify-content: space-between;

      .left {
        width: calc(100% - 93px);
        display: flex;
        overflow: hidden;

        .lm-user-block {
          display: flex;
          width: 100%;

          a {
            display: flex;
            width: 100%;
          }

          img {
            min-width: 40px;
          }
        }
      }

      .right {
        min-width: 24px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
</style>
