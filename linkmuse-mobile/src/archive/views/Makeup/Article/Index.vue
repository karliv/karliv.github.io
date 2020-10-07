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
      </div>
    </div>
    <div class="lm-m-filter-categories-wrap">
      <div class="lm-m-filter-categories lm-tags">
        <a href="javascript:void(0)" class="lm-tag active">все</a>
        <a href="javascript:void(0)" class="lm-tag">статья</a>
        <a href="javascript:void(0)" class="lm-tag">акция</a>
        <a href="javascript:void(0)" class="lm-tag">интервью</a>
      </div>
    </div>
    <div class="wrapper no-padding">
      <div class="lm-m-articles--list row">
        <a href="javascript:void(0)" class="lm-m-articles--item">
          <div class="lm-m-articles--item--head">
            <img src="https://linkmuse.com/upload/images/media/gj/9a/gj9aZtKf79UWf8IkfljJ-262x208.jpg" alt="">
          </div>
          <div class="lm-m-articles--item--bottom">
            <div class="lm-m-articles--item--top">
              <a href="javascript:void(0)" class="type">Статья</a>
              <span class="date">сегодня в 12:30</span>
            </div>
            <div class="lm-m-articles--item--name">Башня и облачко в небушке</div>
            <a href="javascript:void(0)" class="lm-user-block small">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Fashion production Fashion production Fashion production</span></div>
              </div>
            </a>
          </div>
        </a>
        <a href="javascript:void(0)" class="lm-m-articles--item">
          <div class="lm-m-articles--item--head">
            <img src="https://linkmuse.com/upload/images/media/gj/9a/gj9aZtKf79UWf8IkfljJ-262x208.jpg" alt="">
          </div>
          <div class="lm-m-articles--item--bottom">
            <div class="lm-m-articles--item--top">
              <a href="javascript:void(0)" class="type">Статья</a>
              <span class="date">сегодня в 12:30</span>
            </div>
            <div class="lm-m-articles--item--name">Башня и облачко в небушке</div>
            <a href="javascript:void(0)" class="lm-user-block small">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Fashion production Fashion production Fashion production</span></div>
              </div>
            </a>
          </div>
        </a>
        <a href="javascript:void(0)" class="lm-m-articles--item">
          <div class="lm-m-articles--item--head">
            <img src="https://linkmuse.com/upload/images/media/gj/9a/gj9aZtKf79UWf8IkfljJ-262x208.jpg" alt="">
          </div>
          <div class="lm-m-articles--item--bottom">
            <div class="lm-m-articles--item--top">
              <a href="javascript:void(0)" class="type">Статья</a>
              <span class="date">сегодня в 12:30</span>
            </div>
            <div class="lm-m-articles--item--name">Башня и облачко в небушке</div>
            <a href="javascript:void(0)" class="lm-user-block small">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Fashion production Fashion production Fashion production</span></div>
              </div>
            </a>
          </div>
        </a>
        <a href="javascript:void(0)" class="lm-m-articles--item">
          <div class="lm-m-articles--item--head">
            <img src="https://linkmuse.com/upload/images/media/gj/9a/gj9aZtKf79UWf8IkfljJ-262x208.jpg" alt="">
          </div>
          <div class="lm-m-articles--item--bottom">
            <div class="lm-m-articles--item--top">
              <a href="javascript:void(0)" class="type">Статья</a>
              <span class="date">сегодня в 12:30</span>
            </div>
            <div class="lm-m-articles--item--name">Башня и облачко в небушке</div>
            <a href="javascript:void(0)" class="lm-user-block small">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Fashion production Fashion production Fashion production</span></div>
              </div>
            </a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Статьи'
    }
  }
</script>

