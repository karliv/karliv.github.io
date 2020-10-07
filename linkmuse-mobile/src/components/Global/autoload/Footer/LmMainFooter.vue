<template>
  <footer class="footer-static">
    <div class="wrapper">
      <div class="menu-old">
        <nav>
          <div class="title">{{ $t('mainpage.footer.sections') }}</div>
          <ul>
            <li>
              <router-link :to="{ name: 'users.index' }">{{ $t('unified-profile.professionals.professionals') }}</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'board.castings.index' }">{{ $t('mainpage.footer.castings') }}</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'board.locations.index' }">Локации</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'articles.index' }">{{ $t('mainpage.footer.blog') }}</router-link>
            </li>
          </ul>
        </nav>
        <nav>
          <div class="title">{{ $t('mainpage.footer.links') }}</div>
          <ul>
            <li>
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.linkmuse&hl=ru">{{ $t('mainpage.footer.download-android') }}</a>
            </li>
            <li>
              <a target="_blank" href="https://itunes.apple.com/ru/app/linkmuse/id1309529188?mt=8">{{ $t('mainpage.footer.download-ios') }}</a>
            </li>
            <li>
              <router-link :to="{ name: 'register' }" @click.native="_destroyToken({ reload: false })">{{ $t('mainpage.footer.register') }}</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'login' }" @click.native="_destroyToken({ reload: false })">{{ $t('mainpage.footer.sign-in') }}</router-link>
            </li>
            <li><a href="https://hr.linkmuse.com" target="_blank">О нас</a></li>
          </ul>
        </nav>
        <nav style="display:none;">
          <div class="title">{{ $t('mainpage.footer.services') }}</div>
          <ul>
            <li>
<!--              <router-link :to="{ name: 'certifying.index' }">{{ $t('mainpage.footer.verification') }}</router-link>-->
            </li>
          </ul>
        </nav>
        <nav>
          <div class="title">{{ $t('mainpage.footer.contacts') }}</div>
          <ul>
            <li>
              <a href="mailto:help@linkmuse.com">{{ $t('mainpage.footer.send-email') }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="social">
        <div class="social-wrap">
          <ul>
            <li class="vk"><a href="https://vk.com/link_muse" target="_blank"></a></li>
            <li class="fb"><a href="https://www.facebook.com/linkmuseofficial" target="_blank"></a></li>
            <li class="instagram"><a href="https://www.instagram.com/linkmuse/" target="_blank"></a></li>
            <li class="youtube" style="display: none;"><a href="javascript:void(0)"></a></li>
          </ul>
        </div>
        <div class="desc">
          <span>{{ $t('mainpage.footer.community') }}</span>
          <span>Linkmuse © {{ $moment() | moment('Y') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: "LinkMuseFooter",
    methods: {
      ...mapActions({
        _destroyToken: 'auth/destroyToken'
      })
    }
  }
</script>

<style scoped>

</style>
