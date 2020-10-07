<template>
  <div class="lm-m-cs-paid">
    <div class="lm-m-cs-paid-wrap">
      <div class="title">Услуга оплачена!</div>
      <div class="desc" style="margin-bottom: 40px">Квитанцию об оплате и информацию
        о событии мы отправили вам на почту</div>
      <div class="desc">Напишите специалисту свои пожелания по дате и времени</div>
      <a href="javascript:void(0)" class="lm-outline-button middle">Написать</a>
    </div>
    <div class="lm-m-cs-paid-wrap">
      <div class="title">Услуга не оплачена!</div>
      <div class="desc">Произошла ошибка при переводе средств,
        пожалуйста, повторите попытку</div>
      <a href="javascript:void(0)" class="lm-outline-button middle">Повторить</a>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Услуга оплачена/неоплачена'
    },
    computed: {},
  }
</script>
