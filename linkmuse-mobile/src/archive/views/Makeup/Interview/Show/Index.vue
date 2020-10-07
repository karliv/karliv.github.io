<template>
  <div>
    <div class="lm-m-article-wrap">
      <div class="lm-m-article-wrap--item">
        <div class="lm-m-black-head-nav">
          <div class="lm-m-black-head-nav-wrap">
            <div class="left">
              <router-link :to="{ name: 'interviews.index' }">
                <i class="lm-back-icon"></i>
                <span>К списку</span>
              </router-link>
            </div>
            <div class="right">
              <i class="lm-more-icon"></i>
            </div>
          </div>
        </div>
        <div class="lm-m-article-wrap--item-head">
          <img class="background" src="https://linkmuse.com/upload/images/album/Yw/0b/Yw0b1VhqLkxsWlohwOjw-273x_-resize.jpg" alt="">
          <div class="lm-m-article-overflow">
            <img class="image" src="https://linkmuse.com/upload/images/media/7V/zF/7VzFquMYMFEx0dtHp9H7-346x442-quadrant(T)-filters(watermark).jpg" alt="">
          </div>
        </div>
        <div class="lm-m-article-overflow-item">
          <div class="lm-m-article-overflow-item-title">
            <a href="javascript:void(0)" class="category bio">BIO</a>
            <span class="date">сегодня в 12:30</span>
          </div>
          <h1 class="blog-title">Топ-10: как они попали в модельный бизнес</h1>
          <div class="lm-m-article-item-user">
            <div class="lm-user-block small">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Оля Чупахина</span></div>
              </div>
            </div>
            <div class="lm-m-article-item-share">
              <i class="lm-share"></i>
              <div class="lm-social">
                <a href="javascript:void(0)" class="lm-social-vk"></a>
                <a href="javascript:void(0)" class="lm-social-fb"></a>
                <a href="javascript:void(0)" class="lm-social-google"></a>
              </div>
            </div>
            <div class="lm-m-article-item-view">
              <i class="lm-icon-heart active"></i>
              <!--i.lm-icon-eye это если нужны будут просмоты-->
              <span>154</span>
            </div>
          </div>
          <div class="text">
            <p>
            с 17 по 21 мая под Петербургом на фестивале SOLAR SISTO 2018 пройдет презентация мобильного приложения "Heaven Reality"
            </p>
            <br><br>
            <p>
            «Heaven Reality» (Небесное реалити) - это большой проект-исследование, ищущий ответ на вопрос - как может выглядеть родина красоты
            </p>
            <br><br>
            <p>
            с 17 по 21 мая под Петербургом на фестивале SOLAR SISTO 2018 пройдет презентация мобильного приложения "Heaven Reality"
            </p>
            <br><br>
            <p>
            «Heaven Reality» (Небесное реалити) - это большой проект-исследование, ищущий ответ на вопрос - как может выглядеть родина красоты
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Интервью'
    },
    computed: { }
  }
</script>
