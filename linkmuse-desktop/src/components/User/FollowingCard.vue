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

      <template v-if="(isCurrentUser === true)">
        <template v-if="(following === true)">
          <a href="javascript:void(0)" @click.stop.prevent="_handleClickUnFollow" :class="['d-row', 'd-text_bold', 'w_auto', {'color_gray-3': true }]">Удалить</a>
        </template>
        <template v-else-if="(following === false)">
          <a href="javascript:void(0)" @click.stop.prevent="_handleClickFollow" :class="['d-row', 'd-text_bold', 'w_auto', {'color_gray-3': false }]">Подписаться</a>
        </template>
      </template>
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
      },
      isCurrentUser: {
        type: Boolean,
        default: false
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
      },
      following () {
        return (has(this.user, 'following') && this.user.following === false) || true
      }
    },
    methods: {
      _handleClickUnFollow () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'отписаться',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите отписаться от пользователя?'
        }).then(() => {
          this._handleChangeFollow()
        }).catch(() => {})
      },
      _handleClickFollow () {
        this._handleChangeFollow()
      },
      _handleChangeFollow () {
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        const { id } = this.user

        this.$api.post(`api/v1/follow`, { user_id: id }).then((response) => {
          const { data: { result } } = response

          if (Boolean(result)) {
            this.$gtm.trackEvent({ event: 'subscribe' })
          }
          loader.hide()
          this.$emit('changeFollow', id, Boolean(result))
        }, (error) => {
          loader.hide()
          const { response: { data, status }} = error
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка' })

          throw new Error('Error follow user')
        })
      }
    }
  }
</script>

<style scoped>

</style>
