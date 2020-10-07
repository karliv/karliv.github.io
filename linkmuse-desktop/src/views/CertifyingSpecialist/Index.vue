<template>
  <no-ssr>
    <section>
      <div class="lm-cs-guest-header">Сделай свой выбор</div>

      <div class="lm-cs-guest-section">
        <router-link :to="{ name: 'certifying.customer.index' }" class="lm-cs-guest-section one">
          <p>Я фотографирую</p>
        </router-link>

        <router-link :to="{ name: 'certifying.executor.index' }" class="lm-cs-guest-section two">
          <p>Я позирую</p>
        </router-link>
      </div>
      <div class="lm-cs-guest-footer">
        <img src="/dist/img/vs/lm-logo-text.svg" alt="LinkMuse" style="width: 100px;">
      </div>
    </section>
  </no-ssr>
</template>

<script>
import { addClass, removeClass } from '@utils'
export default {
  metaInfo: {
    title: 'Верификация'
  },
  mounted () {
    let app = document.getElementById('app')
    addClass(app, 'fix-landing-page-promo')
  },
  beforeDestroy () {
    let app = document.getElementById('app')
    removeClass(app, 'fix-landing-page-promo')
  },
}
</script>

<style lang="css">
  .clearfix {
    overflow: hidden;
  }

  a.lm-cs-guest-section p {
    position: absolute;
    z-index: 2;
    margin: auto;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: 0.5px;
  }

  a.lm-cs-guest-section {
    display: block;
    width: 50%;
    min-height: calc(100vh - 170px);
    font-weight: bold;

    color: white;
    font-family: sans-serif;
    font-size: 30px;
    text-align: center;
    float: left;
    background-position: center;
    background-size: cover;
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    text-decoration: none;
    position: relative;
  }

  a.lm-cs-guest-section:hover:after {
    background-color: rgba(40, 42, 54, 0.32);
  }

  a.lm-cs-guest-section:after {
    opacity: 1;
    transition: .5s all ease-in-out;
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(40, 42, 54, 0.64);
    z-index: 1;
  }

  .one {
    background-image: url("/dist/img/vs/photograph.jpg")
  }

  .two {
    background-image: url("/dist/img/vs/actor.jpg")
  }

  @media screen and (max-width: 769px) {
    a.lm-cs-guest-section:hover:after {

    }

    a.lm-cs-guest-section p {
      padding: 20px;
      font-size: 20px;
    }

    a.lm-cs-guest-section {
      width: 100%;
      padding: 0;
      min-height: calc(50vh - 48px);
    }
  }

  .lm-cs-guest-header {
    height: 48px;
    line-height: 48px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .lm-cs-guest-footer {
    font-size: 18px;
  }

  .lm-cs-guest-header, .lm-cs-guest-footer {
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    text-align: center;
    color: #808792;
    text-transform: uppercase;
  }

  .fix-landing-page-promo .lm-content {
    width: 100% !important;
    padding: 0 !important;
  }

</style>
