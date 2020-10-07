<template lang="html">
  <div class="page page_declaration page_declaration_casting">
    <div class="container container_declaration container_declaration_casting">
      <div class="page__header page__header_declaration page__header_declaration_casting">
        <div class="block block_declaration block_declaration_casting">
          <div class="row row_justify_between">
            <button class="btn btn_rounded btn_back">
              <svg class="icon icon_back">
                <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_back" />
              </svg>
            </button>
            <div class="row">
              <button class="btn btn_rounded btn_like btn_like_active">
                <svg class="icon icon_like">
                  <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
                </svg>
              </button>
              <button class="btn btn_rounded btn_share">
                <svg class="icon icon_share">
                  <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_share" />
                </svg>
              </button>
              <button class="btn btn_rounded btn_options">
                <svg class="icon icon_options">
                  <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_options" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="page__body page__body_declaration page__body_declaration_casting">
        <div class="section section_declaration section_declaration_casting">
          <div class="block block_declaration block_declaration_casting">
            <div class="row">
              <div class="markdown-layout">
                <div class="markdown-layout__title">Заголовок (текст)</div>
                <div class="markdown-layout__text markdown-layout__text_semibold">Полужирный текст</div>
                <div class="markdown-layout__text markdown-layout__text_italic">Курсивный текст</div>
                <strike class="markdown-layout__text markdown-layout__text_strike">Зачеркнутый текст</strike>
                <ul class="list markdown-layout__list markdown-layout__list_unordered">
                  <li class="list__item">Элемент списка</li>
                  <li class="list__item">Элемент списка</li>
                  <li class="list__item">Элемент списка</li>
                </ul>
                <ol class="list markdown-layout__list markdown-layout__list_ordered">
                  <li class="list__item">Элемент списка</li>
                  <li class="list__item">Элемент списка</li>
                  <li class="list__item">Элемент списка</li>
                </ol>
                <a href="#" class="link markdown-layout__link">Ссылка</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped>
</style>
