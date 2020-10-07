<template>
  <div>
    <div class="lm-m-nav-menu">
      <div class="lm-m-nav-wrapper">
        <div class="lm-m-nav-menu--left">
          <a class="lm-m-nav-menu--item active">
            <span class="text">Мои кастинги</span>
          </a>
          <a href="javascript:void(0)" class="lm-m-nav-menu--item">
            <span class="text">Все кастинги</span>
          </a>
        </div>
        <div class="lm-m-nav-menu--right">
          <div class="lm-m-nav-menu--add"></div>
        </div>
      </div>
    </div>
    <div :class="{ 'wrapper':true, 'no-padding': true}">
      <div class="lm-m-casting--list lm-m-my-castings--list null">
        <div class="lm-m-my-castings-empty">
          <div class="text">
            <span>😕</span>
            <span>У вас нет активных кастингов</span>
          </div>
          <div class="lm-primary-button middle lm-icon-button lm-plus-icon">Создать</div>
        </div>
      </div>
    </div>
    <div :class="{ 'wrapper':true, 'no-padding': true}" style="display: none;">
      <div class="lm-m-casting--list lm-m-my-castings--list row">
        <div class="lm-m-casting--list--item published">
          <div class="lm-m-casting--list--item-head">
            <div class="lm-m-casting--list--item-top">
              <div class="left">
                <div class="lm-m-casting--list--item-top--type">
                  <div class="lm-casting--status"></div>
                  <span>Опубликован</span>
                </div>
              </div>
              <div class="right">
                <i @click="toogleModal" class="icon-more"></i>
              </div>
            </div>
            <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
            <div class="lm-m-castings-list--item-info">
              <span class="text">Открыт для всех</span>
            </div>
          </div>
          <div class="lm-m-castings-list--item-footer">
            <div class="left">
              <div class="price">245 <span class="count">(+13)</span></div>
              <div class="text">отклика</div>
            </div>
            <div class="right">
              <a href="javascript:void(0)" class="lm-outline-button middle">Открыть отклики</a>
            </div>
          </div>
        </div>
        <div class="lm-m-casting--list--item published">
          <div class="lm-m-casting--list--item-head">
            <div class="lm-m-casting--list--item-top">
              <div class="left">
                <div class="lm-m-casting--list--item-top--type">
                  <div class="lm-casting--status"></div>
                  <span>Опубликован</span>
                </div>
              </div>
              <div class="right">
                <i @click="toogleModal" class="icon-more"></i>
              </div>
            </div>
            <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
            <div class="lm-m-castings-list--item-info">
              <span class="text">Открыт только для подходящих</span>
            </div>
          </div>
          <div class="lm-m-castings-list--item-footer">
            <div class="left">
              <div class="text">откликов нет 🙁</div>
            </div>
            <div class="right">
              <a href="javascript:void(0)" class="lm-outline-button middle disabled">Открыть отклики</a>
            </div>
          </div>
        </div>
        <div class="lm-m-casting--list--item not-published">
          <div class="lm-m-casting--list--item-head">
            <div class="lm-m-casting--list--item-top">
              <div class="left">
                <div class="lm-m-casting--list--item-top--type">
                  <div class="lm-casting--status"></div>
                  <span>Не опубликован</span>
                </div>
              </div>
              <div class="right">
                <i @click="toogleModal" class="icon-more"></i>
              </div>
            </div>
            <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
            <div class="lm-m-castings-list--item-info">
              <span class="text">Доступен только по ссылке</span>
            </div>
          </div>
          <div class="lm-m-castings-list--item-footer">
            <div class="left">
            </div>
            <div class="right">
              <a href="javascript:void(0)" class="lm-outline-button middle">Опубликовать</a>
            </div>
          </div>
        </div>
        <div class="lm-m-casting--list--item moderate">
          <div class="lm-m-casting--list--item-head">
            <div class="lm-m-casting--list--item-top">
              <div class="left">
                <div class="lm-m-casting--list--item-top--type">
                  <div class="lm-casting--status"></div>
                  <span>На модерации</span>
                </div>
              </div>
              <div class="right">
                <i @click="toogleModal" class="icon-more"></i>
              </div>
            </div>
            <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
            <div class="lm-m-castings-list--item-info">
              <span class="text">Открыт для всех</span>
            </div>
          </div>
          <div class="lm-m-castings-list--item-footer">
            <div class="left">
              <div class="text">опубликован: 12 дек в 12:54</div>
            </div>
            <div class="right">

            </div>
          </div>
        </div>
      </div>
    </div>
    <actionsheet :actions="actions" v-model="modal" cancel-text=""></actionsheet>
  </div>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Мои кастинги'
    },
    data () {
      return {
        modal: false,
        actions: [
          {
            name: 'Скопировать ссылку на кастинг',
            method: this.toogleModal
          },
          {
            name: 'Редактировать',
            method: this.toogleModal
          },
          {
            name: 'Удалить',
            method: this.toogleModal,
            color: '#fc2e5f'
          }
        ]
      }
    },
    methods: {
      toogleModal () {
        this.modal = !this.modal
      }
    }
  }
</script>
