<template>
    <div class="lm-m-casting--page lm-m-response-page">
        <div class="lm-m-nav-menu">
            <div class="lm-m-nav-wrapper">
                <div class="lm-m-nav-menu--center">
                    <router-link class="lm-m-nav-menu--item" :to="{ name: 'castings.index' }">
                        <span class="text">Каталог исполнителей</span>
                    </router-link>
                </div>
                <div class="lm-m-nav-menu--right">
                    <div class="lm-m-nav-menu--filter active" @click="toogleFilter"></div>
                </div>
            </div>
        </div>
        <div class="lm-m-response-page-user-wrap talents-list">
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
                <div class="lm-m-user-item-image-wrap null">
                    <span>портфолио нет 🙁</span>
                </div>
            </div>
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
            </div>
        </div>
        <actionsheet :actions="actions" v-model="action_sheet" cancel-text=""></actionsheet>
        <div class="lm-m-filter" v-if="filter">
            <div class="lm-m-black-head-nav">
                <div class="lm-m-black-head-nav-wrap">
                    <div class="left">
                        <a href="javascript:void(0)" @click="toogleFilter">
                            <i class="lm-back-icon"></i>
                            <span>К списку</span>
                        </a>
                    </div>
                  <div class="right">
                    <a href="javascript:void(0)" class="lm-link-button">Сбросить</a>
                  </div>
                </div>
            </div>
            <div class="lm-m-filter-content">
                <div class="lm-m-filter-line toggle">
                    <div class="lm-toggle">
                        <input class="lm-toggle--checkbox" type="checkbox" id="toggle_1">
                        <label class="lm-toggle--label" for="toggle_1"></label>
                    </div>
                    <span>Только с портфолио</span>
                </div>
                <div class="lm-m-filter-line-wrap">
                    <div class="lm-m-filter-line lm-dropdown-wrap">
                        <label for=''>Профессия</label>
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">Любая</div>
                            <i class="lm-dropdown-icon"></i>
                            <div class="lm-dropdown-menu">
                                <a href="javascript:void(0)">Выбор</a>
                                <a href="javascript:void(0)">Выбор 1</a>
                                <a href="javascript:void(0)">Выбор 2</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-filter-line-wrap">
                    <div class="lm-m-filter-line lm-m-filter-select-sex">
                        <div class="lm-input-wrap">
                            <label class="fix-label" for=''>Пол</label>
                            <ul class="lm-checkbox-buttons">
                                <li>
                                    <input checked name="radio" type="checkbox" id="male">
                                    <label for="male">
                                        <span>Мужской</span>
                                        <i class="lm-sex-male-icon"></i>
                                    </label>
                                </li>
                                <li>
                                    <input name="radio" type="checkbox" id="female">
                                    <label for="female">
                                        <span>Женский</span>
                                        <i class="lm-sex-female-icon"></i>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="betwen">
                            <div class="lm-input-wrap">
                                <label for=''>Возраст (от)</label>
                                <input type="text" class="lm-input">
                            </div>
                            <div class="lm-input-wrap">
                                <label for=''>Возраст (до)</label>
                                <input type="text" class="lm-input">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lm-m-filter-line-wrap">
                    <div class="lm-m-filter-line lm-dropdown-wrap">
                        <label for=''>Страна</label>
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">Любая</div>
                            <i class="lm-dropdown-icon"></i>
                            <div class="lm-dropdown-menu">
                                <a href="javascript:void(0)">Выбор</a>
                                <a href="javascript:void(0)">Выбор 1</a>
                                <a href="javascript:void(0)">Выбор 2</a>
                            </div>
                        </div>
                    </div>
                    <div class="lm-m-filter-line lm-dropdown-wrap">
                        <label for=''>Город</label>
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">Любая</div>
                            <i class="lm-dropdown-icon"></i>
                            <div class="lm-dropdown-menu">
                                <a href="javascript:void(0)">Выбор</a>
                                <a href="javascript:void(0)">Выбор 1</a>
                                <a href="javascript:void(0)">Выбор 2</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="lm-m-filter-line-wrap">
                    <div class="lm-m-filter-line thee-in-line">
                        <div class="two-line-mobile">
                            <div class="lm-input-wrap">
                                <label for=''>Рост (от)</label>
                                <input type="text" class="lm-input">
                            </div>
                            <div class="lm-input-wrap">
                                <label for=''>Рост (до)</label>
                                <input type="text" class="lm-input">
                            </div>
                        </div>
                        <div class="lm-dropdown-wrap">
                            <label for=''>Телосложение</label>
                            <div class="lm-dropdown">
                                <div class="lm-dropdown-selected">Любой</div>
                                <i class="lm-dropdown-icon"></i>
                                <div class="lm-dropdown-menu">
                                    <a href="javascript:void(0)">Выбор</a>
                                    <a href="javascript:void(0)">Выбор 1</a>
                                    <a href="javascript:void(0)">Выбор 2</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-filter-line-wrap">
                    <div class="lm-m-filter-line lm-dropdown-wrap">
                        <label for=''>Тип внешности</label>
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">Любая</div>
                            <i class="lm-dropdown-icon"></i>
                            <div class="lm-dropdown-menu">
                                <a href="javascript:void(0)">Выбор</a>
                                <a href="javascript:void(0)">Выбор 1</a>
                                <a href="javascript:void(0)">Выбор 2</a>
                            </div>
                        </div>
                    </div>
                    <div class="lm-m-filter-line lm-dropdown-wrap">
                        <label for=''>Цвет глаз</label>
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">Любая</div>
                            <i class="lm-dropdown-icon"></i>
                            <div class="lm-dropdown-menu">
                                <a href="javascript:void(0)">Выбор</a>
                                <a href="javascript:void(0)">Выбор 1</a>
                                <a href="javascript:void(0)">Выбор 2</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-filter-line-wrap">
                    <div class="lm-m-filter-line lm-dropdown-wrap">
                        <label for=''>Цвет волос</label>
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">Любая</div>
                            <i class="lm-dropdown-icon"></i>
                            <div class="lm-dropdown-menu">
                                <a href="javascript:void(0)">Выбор</a>
                                <a href="javascript:void(0)">Выбор 1</a>
                                <a href="javascript:void(0)">Выбор 2</a>
                            </div>
                        </div>
                    </div>
                    <div class="lm-m-filter-line lm-dropdown-wrap">
                        <label for=''>Длина волос</label>
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">Любая</div>
                            <i class="lm-dropdown-icon"></i>
                            <div class="lm-dropdown-menu">
                                <a href="javascript:void(0)">Выбор</a>
                                <a href="javascript:void(0)">Выбор 1</a>
                                <a href="javascript:void(0)">Выбор 2</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-filter-line-wrap">
                    <div class="lm-m-filter-line thee-in-line">
                        <div class="lm-m-filter-line lm-dropdown-wrap">
                            <label for=''>Длина волос</label>
                            <div class="lm-dropdown">
                                <div class="lm-dropdown-selected">Любая</div>
                                <i class="lm-dropdown-icon"></i>
                                <div class="lm-dropdown-menu">
                                    <a href="javascript:void(0)">Выбор</a>
                                    <a href="javascript:void(0)">Выбор 1</a>
                                    <a href="javascript:void(0)">Выбор 2</a>
                                </div>
                            </div>
                        </div>
                        <div class="two-line-mobile">
                            <div class="lm-input-wrap">
                                <label for=''>Грудь (от)</label>
                                <input type="text" class="lm-input">
                            </div>
                            <div class="lm-input-wrap">
                                <label for=''>Грудь (до)</label>
                                <input type="text" class="lm-input">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-filter-line-wrap">
                    <div class="lm-m-filter-line thee-in-line">
                        <div class="two-line-mobile">
                            <div class="lm-input-wrap">
                                <label for=''>Талия (от)</label>
                                <input type="text" class="lm-input">
                            </div>
                            <div class="lm-input-wrap">
                                <label for=''>Талия (до)</label>
                                <input type="text" class="lm-input">
                            </div>
                        </div>
                        <div class="two-line-mobile">
                            <div class="lm-input-wrap">
                                <label for=''>Бедра (от)</label>
                                <input type="text" class="lm-input">
                            </div>
                            <div class="lm-input-wrap">
                                <label for=''>Бедра (до)</label>
                                <input type="text" class="lm-input">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-filter-line-wrap">
                    <div class="lm-m-filter-line lm-dropdown-wrap">
                        <label for=''>Размер одежды</label>
                        <div class="lm-dropdown">
                            <div class="lm-dropdown-selected">Любая</div>
                            <i class="lm-dropdown-icon"></i>
                            <div class="lm-dropdown-menu">
                                <a href="javascript:void(0)">Выбор</a>
                                <a href="javascript:void(0)">Выбор 1</a>
                                <a href="javascript:void(0)">Выбор 2</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-filter-line-wrap">
                    <div class="lm-input-wrap">
                        <label class="fix-label" for=''>Особенности</label>
                        <ul class="lm-checkbox-buttons">
                            <li>
                                <input checked name="radio" type="checkbox" id="tatoo">
                                <label for="tatoo">
                                    <span style="line-height: 18px;font-size: 14px;">Есть татуировки</span>
                                </label>
                            </li>
                            <li>
                                <input name="radio" type="checkbox" id="pirsing">
                                <label for="pirsing">
                                    <span style="line-height: 18px;font-size: 14px;">Есть пирсинг</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lm-m-filter-line button">
                    <a href="javascript:void(0)" class="lm-primary-button" @click="toogleFilter">Показать</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Список талантов'
    },
    data () {
      return {
        filter: true,
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
            name: 'пригласить на кастинг',
            method: this.toogleActionSheet,
            color: '#0063da'
          }
        ]
      }
    },
    computed: {},
    methods: {
      toogleActionSheet () {
        this.action_sheet = !this.action_sheet
      },
      toogleFilter () {
        this.filter = !this.filter
      },
    }
  }
</script>
