<template>
  <div class="friends--item col-xs-1-5" >
    <i class="icon-more" @click.stop.prevent>
      <div class="actions-item">
        <ul>
          <!--<li><a href="javascript:void(0)" @click="_handleClickMoveUser">Переместить</a></li>-->
          <li><a href="javascript:void(0)" @click="_handleClickRemoveUser">Удалить</a></li>
        </ul>
      </div>
    </i>

    <router-link :to="{ name: 'user.show', params: { username: user.username } }" target="_blank">
      <img :src="user.avatar" :alt="user.name">
      <span class="friends--item-name"> {{ user.name }} </span>
      <span class="friends--item-category" v-if="(Array.isArray(user.category) && user.category.length)">
        {{ user.join(', ') | truncate(18) }}
      </span>
      <div class="info" v-if="(true === false)">
        <span>{{ user.age }}</span>
        <span>{{ user.country }}<i v-if="user.city" style="font-style: normal;">,</i> {{ user.city }}</span>
      </div>
    </router-link>
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
      _handleClickMoveUser () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить пользователя из подборки?'
        }).then(() => {
          this.$emit('move', this.user['id'])
        }).catch(() => {})
      },
      _handleClickRemoveUser () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить пользователя из подборки?'
        }).then(() => {
          this.$emit('remove', this.user['id'])
        }).catch(() => {})
      }
    }
  }
</script>

<style scoped>

</style>
