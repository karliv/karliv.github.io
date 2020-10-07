<template>
  <div class="page__container page__container_error page__container_error_404">
    <div>
      <h1 class="page__title page__title_error page__title_error_404">500</h1>
      <p class="page__paragraph page__paragraph_error page__paragraph_error_404">Сервер сдох.</p>
      <br class="paragraph__break">
      <br class="paragraph__break">
      <br class="paragraph__break paragraph__break_tablet">
      <p class="page__paragraph page__paragraph_error page__paragraph_error_404">
        Нашему серверу очень нехорошо, и он не хочет ни с кем разговаривать. Если такое случилось несколько раз, напишите на
        <a target="_blank" class="page__link page__link_404" href="mailto:help@linkmuse.com">help@linkmuse.com</a>
        Пока что попробуйте перейти на главную, вдруг заработает.
        <a class="page__link page__link_404" href="/">На главную</a>
      </p>
    </div>
    <img class="page__img page__img_error page__img_error_404" src="/dist/img/pages/page/_error/_404/error-404.svg" alt="Error. Page not found"/>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: '500'
    }
  }
</script>
