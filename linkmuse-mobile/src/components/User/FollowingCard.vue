<template>
  <div class="personal-list__item row align_center">
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

    <template v-if="(isCurrentUser === true)">
      <template v-if="(following === true)">
        <a href="javascript:void(0)" @click.stop.prevent="_handleClickUnFollow" class="row m-text_bold color_gray-3">Отписаться</a>
      </template>
      <template v-else-if="(following === false)">
        <a href="javascript:void(0)" @click.stop.prevent="_handleClickFollow" class="row m-text_bold color_gray-3">Подписаться</a>
      </template>
    </template>
  </div>
</template>

<script>
  import { has, AVATAR } from '@utils'
  import { Indicator, Toast } from 'mint-ui'

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
        Indicator.open()

        const { id } = this.user

        this.$api.post(`api/v1/follow`, { user_id: id }).then((response) => {
          const { data: { result } } = response

          if (Boolean(result)) {
            this.$gtm.trackEvent({ event: 'subscribe' })
          }
          Indicator.close()
          this.$emit('changeFollow', id, Boolean(result))
        }, (error) => {
          Indicator.close()
          const { response: { data, status }} = error
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          throw new Error('Error follow user')
        })
      }
    }
  }
</script>
