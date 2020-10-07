<template>
    <div>
        <div class="lm-m-casting--page lm-m-response-page" v-if="!modal">
            <div class="lm-m-black-head-nav">
                <div class="lm-m-black-head-nav-wrap">
                    <div class="left">
                        <router-link :to="{ name: 'castings.index' }">
                            <i class="lm-back-icon"></i>
                            <span>Кастинг девушек блондинок для съёмок рекламы</span>
                        </router-link>
                    </div>

                </div>
            </div>
            <div class="lm-m-casting--page-content">
                <div class="lm-m-casting--page-content-wrap">
                    <div class="lm-m-nav-menu">
                        <div class="lm-m-nav-wrapper">
                            <div class="lm-m-nav-menu--left">
                                <a class="lm-m-nav-menu--item active">
                                    <span class="text">отклики</span>
                                </a>
                                <a href="javascript:void(0)" class="lm-m-nav-menu--item">
                                    <span class="text">приглашения</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-response-page-title">Новые</div>
                <div class="lm-m-response-page-user-wrap">
                    <div class="lm-m-response-page-user-item">
                        <div class="lm-m-user-item-head">
                            <div class="left">
                                <div class="lm-user-block">
                                    <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
                                    <div class="lm-user-block-info">
                                        <div class="lm-user-block-info-name"><span>Fashion production</span></div>
                                        <div class="lm-user-block-info-type">Дизайнер</div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <i @click="toogleActionSheet" class="icon-more"></i>
                            </div>
                        </div>
                        <div class="lm-m-user-item-text-response">
                            <span>Привет всем! Меня зовут Анфиса и я классная актриса! Я пою в хоре, вяжу макраме, леплю из пластилина. Люди любят меня за мою красту, а</span><a
                                href="javascript:void(0)">ещЁ...</a>
                        </div>
                        <div class="lm-m-user-item-image-wrap">
                            <div class="counter">1/3</div>
                            <div class="lm-m-user-item-image-item">
                                <img src="https://linkmuse.com/upload/images/album/Bb/5q/Bb5qcOJyZQUkbkqyzLNm-750x_-resize.jpg" alt="">
                            </div>
                            <div class="lm-m-user-item-image-item">
                                <img src="https://linkmuse.com/upload/images/album/Bb/5q/Bb5qcOJyZQUkbkqyzLNm-750x_-resize.jpg" alt="">
                            </div>
                            <div class="lm-m-user-item-image-item">
                                <img src="https://linkmuse.com/upload/images/album/Bb/5q/Bb5qcOJyZQUkbkqyzLNm-750x_-resize.jpg" alt="">
                            </div>
                        </div>
                        <div class="lm-m-attach-file-wrap">
                            <label for="attach-file">
                                <i class="lm-attach-icon"></i>
                                <span>Файл.пдф</span>
                            </label>
                        </div>
                        <div @click="modalResponse" class="lm-response-button"></div>
                    </div>
                </div>
                <div class="lm-m-response-page-title">просмотренные</div>
                <div class="lm-m-response-page-user-wrap">
                    <div class="lm-m-response-page-user-item">
                        <div class="lm-m-user-item-head">
                            <div class="left">
                                <div class="lm-user-block">
                                    <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
                                    <div class="lm-user-block-info">
                                        <div class="lm-user-block-info-name"><span>Fashion production</span></div>
                                        <div class="lm-user-block-info-type">Дизайнер</div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <i @click="toogleActionSheet" class="icon-more"></i>
                            </div>
                        </div>
                        <div class="lm-m-user-item-text-response">
                            <span>Привет всем! Меня зовут Анфиса и я классная актриса! Я пою в хоре, вяжу макраме, леплю из пластилина. Люди любят меня за мою красту, а</span><a
                                href="javascript:void(0)">ещЁ...</a>
                        </div>
                        <div class="lm-m-user-item-image-wrap">
                            <div class="counter">1/3</div>
                            <div class="lm-m-user-item-image-item">
                                <img src="https://linkmuse.com/upload/images/album/Bb/5q/Bb5qcOJyZQUkbkqyzLNm-750x_-resize.jpg" alt="">
                            </div>
                            <div class="lm-m-user-item-image-item">
                                <img src="https://linkmuse.com/upload/images/album/Bb/5q/Bb5qcOJyZQUkbkqyzLNm-750x_-resize.jpg" alt="">
                            </div>
                            <div class="lm-m-user-item-image-item">
                                <img src="https://linkmuse.com/upload/images/album/Bb/5q/Bb5qcOJyZQUkbkqyzLNm-750x_-resize.jpg" alt="">
                            </div>
                        </div>
                        <div class="lm-m-attach-file-wrap">
                            <label for="attach-file">
                                <i class="lm-attach-icon"></i>
                                <span>Файл.пдф</span>
                            </label>
                        </div>
                        <div @click="modalResponse" class="lm-response-button"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lm-m-casting--page" v-if="modal">
            <div class="lm-m-black-head-nav">
                <div class="lm-m-black-head-nav-wrap">
                    <div class="left">
                        <a href="javascript:void(0)" @click="modalResponse">
                            <i class="lm-back-icon"></i>
                            <span>Назад</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lm-m-casting--page-content response">
                <div class="lm-m-casting--page-content-wrap">
                    <h1 class="lm-m-casting-page-title">Приглашение</h1>
                    <div class="lm-user-block">
                        <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
                        <div class="lm-user-block-info">
                            <div class="lm-user-block-info-name"><span>Fashion production</span></div>
                            <div class="lm-user-block-info-type">Дизайнер</div>
                        </div>
                    </div>
                    <div class="lm-input-wrap">
                        <label for="">Комментарий</label>
                        <textarea class="lm-input">Приглашаем вас на кастинг, место и время будет оглашено позже.
Хорошего дня!</textarea>
                    </div>
                    <div class="lm-m-attach-file-wrap">
                        <input type="file" id="attach-file">
                        <label for="attach-file">
                            <i class="lm-attach-icon"></i>
                            <span>ЗАГРУЗИТЬ ФАЙЛ</span>
                        </label>
                        <div class="lm-m-attach-file-item">
                            <div class="left">
                                <i class="lm-icon-square-download"></i>
                                <span>бриф.pdf</span>
                            </div>
                            <div class="right">
                                <i class="lm-close"></i>
                            </div>
                        </div>
                        <div class="lm-m-attach-file-item">
                            <div class="left">
                                <i class="lm-close uploading">
                                    <div class="lds-css ng-scope">
                                        <div style="width:100%;height:100%" class="lds-rolling">
                                            <div></div>
                                        </div>
                                    </div>
                                </i>
                                <span>файл загружается.pdf</span>
                            </div>
                            <div class="right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lm-m-casting--page-content response-button">
                <div class="lm-m-casting--page-content-wrap">
                    <a @click="modalResponse" href="javascript:void(0)" class="lm-primary-button">Пригласить на кастинг</a>
                </div>
            </div>
        </div>
        <actionsheet :actions="actions" v-model="action_sheet" cancel-text=""></actionsheet>
    </div>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Отклики'
    },
    data () {
      return {
        modal: false,
        action_sheet: false,
        actions: [
          {
            name: 'написать сообщение',
            method: this.toogleActionSheet
          },
          {
            name: 'позвонить по номеру телефона',
            method: this.toogleActionSheet
          },
          {
            name: 'удалить отклик',
            method: this.toogleActionSheet,
            color: '#fc2e5f'
          }
        ]
      }
    },
    computed: {},
    methods: {
      toogleActionSheet () {
        this.action_sheet = !this.action_sheet
      },
      modalResponse () {
        this.modal = !this.modal
      },
    }
  }
</script>
