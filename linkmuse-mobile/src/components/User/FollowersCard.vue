<template>
  <div class="personal-list__item">
    <router-link :to="{ name: 'user.show', params: { username: user.username } }" class="row w_100">
      <div class="notifications-avatar-wrap btn btn_round">
        <img :src="avatar" :alt="user.name" class="notifications-avatar">
      </div>

      <div class="column justify_center ml_3">
        <div class="heading_h5 color_gray-1 mb_0_5">
          {{ user.name | truncate(50) }}
        </div>

        <div class="label_declaration">
          <template>{{ city ? city.text : 'Город не указан' }}</template><template v-if="(age)">, {{ $pluralize(age, ['год', 'года', 'лет']) }}</template>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { has, AVATAR } from '@utils'
  export default {
    props: {
      user: {
        type: Object,
        required: true
      },
      isCurrentUser: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      avatar () {
        if (this.user && has( this.user, 'avatar.84x84')) {
          const { avatar: { '84x84': image } } = this.user
          return image || AVATAR
        } else return AVATAR
      },
      city () {
        return has(this.user, 'city.id') ? this.user.city : null
      },
      age () {
        return has(this.user, 'age') ? this.user.age : null
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
