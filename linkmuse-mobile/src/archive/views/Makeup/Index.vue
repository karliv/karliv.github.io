<template>
  <div>

    <div class="wrapper">
      <img src="/dist/img/lm-logo.svg" alt="logo" style="width: 250px;margin: 0 auto;display: block;margin-top: 20px;margin-bottom: 20px;">
      <ul style="text-align: center">
        <li><router-link :to="{ name: 'makeup.register' }">Регистрация</router-link></li>
        <br>
        <li><router-link :to="{ name: 'makeup.castings.index' }">Кастинги</router-link></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Makeup front-end'
  },
  computed: { }
}
</script>
