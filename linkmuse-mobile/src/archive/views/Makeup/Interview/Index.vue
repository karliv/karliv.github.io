<template>
  <div>
    <div class="lm-m-nav-menu">
      <div class="lm-m-nav-wrapper">
        <div class="lm-m-nav-menu--left">
          <router-link :to="{ name: 'interviews.index' }" class="lm-m-nav-menu--item">
            <span class="text">BIO</span>
          </router-link>
          <router-link :to="{ name: 'articles.index' }" class="lm-m-nav-menu--item">
            <span class="text">Статьи</span>
          </router-link>
        </div>
        <div class="lm-m-nav-menu--right">
          <div class="lm-m-nav-menu--filter active"></div>
        </div>
      </div>
    </div>
    <div class="lm-m-filter-categories-wrap">
      <div class="lm-m-filter-categories lm-tags">
        <a href="javascript:void(0)" class="lm-tag active">все</a>
        <a href="javascript:void(0)" class="lm-tag">актер</a>
        <a href="javascript:void(0)" class="lm-tag">модель</a>
        <a href="javascript:void(0)" class="lm-tag">команда</a>
      </div>
    </div>
    <div class="wrapper no-padding">
      <div class="lm-m-interviews--list row">
        <a href="javascript:void(0)" class="lm-m-interviews--item not-publish">
          <div class="lm-m-interviews--item--head">
            <a href="javascript:void(0)" class="lm-icon--like--blog"></a>
            <img src="https://linkmuse.com/upload/images/media/x5/N9/x5N9tzvg4j8pkHkfuH6x-254x318-quadrant(T)-filters(watermark).jpg" alt="">
          </div>
          <div class="lm-m-interviews--item--bottom">
            <div class="lm-m-interviews--item--name">«Мне говорили, что я "истероид", которому нравится внимание»</div>
            <a href="javascript:void(0)" class="lm-user-block">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Fashion production Fashion production Fashion production</span></div>
                <div class="lm-user-block-info-type">Дизайнер</div>
              </div>
            </a>
          </div>
        </a>
        <a href="javascript:void(0)" class="lm-m-interviews--item">
          <div class="lm-m-interviews--item--head">
            <a href="javascript:void(0)" class="lm-icon--like--blog"></a>
            <img src="https://linkmuse.com/upload/images/media/x5/N9/x5N9tzvg4j8pkHkfuH6x-254x318-quadrant(T)-filters(watermark).jpg" alt="">
          </div>
          <div class="lm-m-interviews--item--bottom">
            <div class="lm-m-interviews--item--name">«Любое событие, хорошее или плохое, имеет отклик»</div>
            <a href="javascript:void(0)" class="lm-user-block">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Fashion production</span></div>
                <div class="lm-user-block-info-type">Дизайнер</div>
              </div>
            </a>
          </div>
        </a>
        <a href="javascript:void(0)" class="lm-m-interviews--item">
          <div class="lm-m-interviews--item--head">
            <a href="javascript:void(0)" class="lm-icon--like--blog active"></a>
            <img src="https://linkmuse.com/upload/images/media/Fg/Nh/FgNhTSeFZ5qeaguQ2JIv-254x318-quadrant(T)-filters(watermark).jpg" alt="">
          </div>
          <div class="lm-m-interviews--item--bottom">
            <div class="lm-m-interviews--item--name">«Человек-актёр – это зеркало, состоящее из множества кусочков, склеивающихся между собой»</div>
            <a href="javascript:void(0)" class="lm-user-block">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Fashion production</span></div>
                <div class="lm-user-block-info-type">Дизайнер</div>
              </div>
            </a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'BIO'
    },
    computed: {}
  }
</script>
