<template>
  <div class="personal-list__item d-row">
    <a href="javascript:void(0)" class="d-column w_auto mr_4">
      <img :src="avatar" :alt="user.name" class="d-img d-img_size_40 border-radius_8">
    </a>

    <div class="flex-beetwen-center w_100">
      <router-link :to="{ name: 'user.show', params: { username: user.username } }" class="d-column w_100" target="_blank">
        <div class="d-text_bold" style="margin-bottom: 2px;">
          {{ user.name | truncate(50) }}
        </div>

        <div class="d-text_small tt_uppercase color_gray-2">
          <template>{{ city ? city.text : 'Город не указан' }}</template><template v-if="(age)">, {{ $pluralize(age, ['год', 'года', 'лет']) }}</template>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { has, AVATAR } from '@utils'

  export default {
    props: {
      user: {
        type: Object,
        required: true
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
  }
</script>

<style scoped>

</style>
