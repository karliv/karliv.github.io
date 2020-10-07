<template>
  <div class="page page_feed">

    <!-- page content -->
    <div class="page__content">

      <div class="page__body page__body_feed"><!-- feed -->

        <div class="d-row mb_6">
          <div class="heading heading_h2 mb_0">Локации</div>
        </div>

        <div class="d-feed">


          <div class="d-card d-card_feed-plug">
            <svg class="d-icon d-icon_size_64 fill_main mb_5">
              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-wait" />
            </svg>
            <div class="heading heading_h5">Продажи пока недоступны</div>
            <div class="ta_center mb_4">Запишитесь на ранний доступ к разделу<br>и протестируйте его в числе первых</div>
            <a href="https://linkmuse.typeform.com/to/A3Rn4O" target="_blank" class="d-btn d-btn_primary">Записаться</a>
          </div>

        </div> <!-- end of feed -->
      </div>
    </div> <!-- end of page content -->
    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div> <!-- end of page -->
</template>

<script>

  export default {
    metaInfo: {
      title: 'Продажи'
    }
  }
</script>

<style scoped>

</style>
