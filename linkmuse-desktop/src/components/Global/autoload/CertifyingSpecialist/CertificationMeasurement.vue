<template>
  <div :class="['vs-portfolio-measurement', { 'view-talent': (isAuthorized === false || authUserIsCustomer === false) }]">
    <template v-if="measurement">
      <div class="item height">
        <span>Рост</span>
        <b>{{ measurement['height'] }} <font>см</font></b>
      </div>
      <div class="item weight">
        <span>Вес</span>
        <b>{{ measurement['weight'] }} <font>кг</font></b>
      </div>
      <div class="item chest">
        <span>Грудь</span>
        <b>{{ measurement['volume-of-breast'] }} <font>см</font></b>
      </div>
      <div class="item waist">
        <span>Талия</span>
        <b>{{ measurement['waist'] }} <font>см</font></b>
      </div>
      <div class="item byrd">
        <span>Бедра</span>
        <b>{{ measurement['hips'] }} <font>см</font></b>
      </div>
      <template v-if="(isAuthorized === false || authUserIsCustomer === false)">
        <router-link :to="{ name: 'certifying.executor.index' }" class="item order">
          <span>Заказать верификацию</span>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      measurement: {
        required: true,
        default: () => {}
      }
    },
    computed: {
      ...mapGetters({
        authRole: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized'
      }),
      authUserIsCustomer () {
        return this.authRole === 'customer'
      }
    }
  }
</script>

<style scoped>

</style>
