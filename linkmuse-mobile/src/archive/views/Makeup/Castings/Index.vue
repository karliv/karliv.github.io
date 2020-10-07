<template>
  <div>
    <div class="lm-m-nav-menu">
      <div class="lm-m-nav-wrapper">
        <div class="lm-m-nav-menu--left">
          <router-link class="lm-m-nav-menu--item" :to="{ name: 'castings.index' }">
            <span class="text">Кастинги</span>
          </router-link>
          <router-link class="lm-m-nav-menu--item" :to="{ name: 'castings.invitations.index' }">
            <span class="text">Приглашения</span>
            <span class="count">+1</span>
          </router-link>
        </div>
        <div class="lm-m-nav-menu--right">
          <div class="lm-m-nav-menu--filter active" @click="toogleFilter"></div>
        </div>
      </div>
    </div>

    <div :class="{ 'wrapper':true, 'no-padding': true, 'open-filter': filter}" style="display: none;">
      <div class="lm-m-casting--list row">
        <div class="lm-m-casting--list--item">
            <div class="lm-m-casting--list--item-head">
                <div class="lm-m-casting--list--item-top">
                    <div class="left">
                        <div class="lm-m-casting--list--item-top--type">
                            <div class="lm-casting--status film"></div>
                            <span>Короткометражный фильм</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="lm-m-casting--list--item-top--sex lm-sex female"></div>
                        <div class="lm-tags">
                            <div class="lm-tag small">34-56 лет</div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
                <div class="lm-m-castings-list--item-date">
                    <span class="text">До конца:</span>
                    <span class="count">23 дня</span>
                </div>
            </div>
            <div class="lm-m-castings-list--item-footer">
                <div class="left">
                    <div class="price">3 000 ₽</div>
                    <div class="text">за проект</div>
                </div>
                <div class="right">
                    <a href="javascript:void(0)" class="lm-outline-button middle">откликнуться</a>
                </div>
            </div>
        </div>
        <div class="lm-m-casting--list--item">
            <div class="lm-m-casting--list--item-head">
                <div class="lm-m-casting--list--item-top">
                    <div class="left">
                        <div class="lm-m-casting--list--item-top--type">
                            <div class="lm-casting--status film"></div>
                            <span>Короткометражный фильм</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="lm-m-casting--list--item-top--sex lm-sex male"></div>
                        <div class="lm-tags">
                            <div class="lm-tag small">34-56 лет</div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
                <div class="lm-m-castings-list--item-date">
                    <span class="text">До конца:</span>
                    <span class="count">23 дня</span>
                </div>
            </div>
            <div class="lm-m-castings-list--item-footer">
                <div class="left">
                    <div class="price">3 000 ₽</div>
                    <div class="text">за проект</div>
                </div>
                <div class="right">
                    <a href="javascript:void(0)" class="lm-primary-button ok middle">на рассмотрении</a>
                </div>
            </div>
        </div>
        <div class="lm-m-casting--list--item">
            <div class="lm-m-casting--list--item-head">
                <div class="lm-m-casting--list--item-top">
                    <div class="left">
                        <div class="lm-m-casting--list--item-top--type">
                            <div class="lm-casting--status film"></div>
                            <span>Короткометражный фильм</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="lm-m-casting--list--item-top--sex lm-sex male"></div>
                        <div class="lm-tags">
                            <div class="lm-tag small">34-56 лет</div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
                <div class="lm-m-castings-list--item-date">
                    <span class="text">До конца:</span>
                    <span class="count">23 дня</span>
                </div>
            </div>
            <div class="lm-m-castings-list--item-footer">
                <div class="left">
                    <div class="price">3 000 ₽</div>
                    <div class="text">за проект</div>
                </div>
                <div class="right">
                    <a href="javascript:void(0)"
                       class="lm-primary-button ok middle lm-icon-button lm-ok-icon-icon">отправлено</a>
                </div>
            </div>
        </div>
        <div class="lm-m-casting--list--item">
            <div class="lm-m-casting--list--item-head">
                <div class="lm-m-casting--list--item-top">
                    <div class="left">
                        <div class="lm-m-casting--list--item-top--type">
                            <div class="lm-casting--status film"></div>
                            <span>Короткометражный фильм</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="lm-m-casting--list--item-top--sex lm-sex female"></div>
                        <div class="lm-tags">
                            <div class="lm-tag small">34-56 лет</div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
                <div class="lm-m-castings-list--item-date">
                    <span class="text">До конца:</span>
                    <span class="count">23 дня</span>
                </div>
            </div>
            <div class="lm-m-castings-list--item-footer">
                <div class="left">
                    <div class="text">не оплачивается</div>
                </div>
                <div class="right">
                    <a href="javascript:void(0)" class="lm-outline-button middle">откликнуться</a>
                </div>
            </div>
        </div>
        <div class="lm-m-casting--list--item disabled">
            <div class="lm-m-casting--list--item-head">
                <div class="lm-m-casting--list--item-top">
                    <div class="left">
                        <div class="lm-m-casting--list--item-top--type">
                            <div class="lm-casting--status film"></div>
                            <span>Короткометражный фильм</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="lm-m-casting--list--item-top--sex lm-sex male"></div>
                        <div class="lm-tags">
                            <div class="lm-tag small">34-56 лет</div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
                <div class="lm-m-castings-list--item-date">
                    <span class="text">До конца:</span>
                    <span class="count">23 дня</span>
                </div>
            </div>
            <div class="lm-m-castings-list--item-footer">
                <div class="left">
                    <div class="text">кастинг закончился 🙁</div>
                </div>

            </div>
        </div>
        <div class="lm-m-casting--list--item disabled">
            <div class="lm-m-casting--list--item-head">
                <div class="lm-m-casting--list--item-top">
                    <div class="left">
                        <div class="lm-m-casting--list--item-top--type">
                            <div class="lm-casting--status film"></div>
                            <span>Короткометражный фильм</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="lm-m-casting--list--item-top--sex lm-sex female"></div>
                        <div class="lm-tags">
                            <div class="lm-tag small">34-56 лет</div>
                        </div>
                    </div>
                </div>
                <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
                <div class="lm-m-castings-list--item-date">
                    <span class="text">До конца:</span>
                    <span class="count">23 дня</span>
                </div>
            </div>
            <div class="lm-m-castings-list--item-footer">
                <div class="left">
                    <div class="text">ты не подходишь 🌚
                    </div>
                </div>
                <div class="right">
                    <a href="javascript:void(0)" class="lm-btn-ghost disabled middle">откликнуться</a>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div v-if="loading">Loading</div>
    <div class="lm-m-filter" v-if="filter">
        <div class="lm-m-black-head-nav">
            <div class="lm-m-black-head-nav-wrap">
                <div class="left">
                    <a href="javascript:void(0)" @click="toogleFilter">
                        <i class="lm-back-icon"></i>
                        <span>К списку</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="lm-m-filter-content">
            <div class="lm-m-filter-line toggle">
                <div class="lm-toggle">
                    <input class="lm-toggle--checkbox" type="checkbox" id="toggle_1">
                    <label class="lm-toggle--label" for="toggle_1"></label>
                </div>
                <span>Подобрать под меня</span>
            </div>
            <div class="lm-m-filter-line-wrap">
                <div class="lm-m-filter-line lm-dropdown-wrap">
                    <label for=''>Категория</label>
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
                    <label for=''>Тип роли</label>
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
            <div class="lm-m-filter-line-wrap tree-element-on-tablet">
                <div class="lm-m-filter-line lm-dropdown-wrap">
                    <label for=''>Гонорар</label>
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
                <div class="lm-m-filter-line lm-input-wrap">
                    <label for=''>Страна</label>
                    <input class="lm-input" type="text" placeholder="Введите cтрану">
                </div>
                <div class="lm-m-filter-line lm-input-wrap">
                    <label for=''>Город</label>
                    <input class="lm-input" type="text" placeholder="Введите город">
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
            <div class="lm-m-filter-line button">
                <a href="javascript:void(0)" class="lm-primary-button" @click="toogleFilter">Показать (34 кастинга)</a>
            </div>
        </div>
    </div>
      <footer>
          <div class="wrapper">
              <ul class="footer--menu" >
                  <li>
                      <a href="javascript:void(0)" class="footer--menu--blog active"></a>
                  </li>
                  <li>
                      <a class="footer--menu--casting"></a>
                  </li>
                  <li>
                      <a @click="toogleModal" href="javascript:void(0)" class="footer--menu--menu"></a>
                  </li>
              </ul>
          </div>
      </footer>
      <div class="lm-m-modal-wrap" v-if="modal" style="bottom: 0;height: 100%">
          <div style="height: 16%" class="lm-m-modal-backdoor" @click="toogleModal">
              <div class="close"></div>
          </div>
          <div class="lm-m-modal-no-auth">
              <div class="lm-m-modal-logo">
                  <img src="/dist/img/lm-logo.svg" alt="linkmuse">
              </div>
              <div class="lm-m-modal-action">
                  <a style="display: none" href="javascript:void(0)" class="lm-primary-button">Создать аккаунт заказчика</a>

                  <a style="display: none" href="javascript:void(0)" class="lm-primary-button">Войти как заказчик</a>
                  <div class="text">
                      Сменить аккаунт
                  </div>
                  <div class="lm-m-modal-action-change">
                      <a href="javascript:void(0)" class="lm-primary-button">Заказчик</a>
                      <a href="javascript:void(0)" class="lm-outline-button  disabled">Исполнитель</a>
                  </div>
              </div>
              <div class="lm-m-modal-links">
                  <a href="javascript:void(0)">Исполнители</a>
                  <a href="javascript:void(0)">Блог</a>
                  <a class="exit" href="javascript:void(0)">Выйти</a>
              </div>
              <div class="lm-m-modal-links">
                <div class="text">Чтобы откликнуться на кастинг,
    зарегистрируйтесь или войдите</div>
                  <a class="lm-primary-button" href="javascript:void(0)">Регистрация</a>
                  <a class="exit" href="javascript:void(0)">Войти</a>
              </div>
              <div class="lm-social-wrap">
                  <div class="text">Наши соц. сети</div>
                  <div class="lm-social">
                      <div class="lm-social-vk"></div>
                      <div class="lm-social-fb"></div>
                      <div class="lm-social-inst"></div>
                    </div>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Кастинги'
    },
    data () {
      return {
        filter: false,
        modal: true
      }
    },
    asyncData ({store}) {
      return store.dispatch('casting/fetchCastingsOnCatalog')
    },
    computed: {
      ...mapGetters({
        castings: 'casting/getCastingsOnCatalog',
        error: 'casting/getCastingsErrorOnCatalog',
        loading: 'casting/getCastingsLoadingOnCatalog'
      }),
    },
    methods: {
      toogleFilter () {
        this.filter = !this.filter
      },
      toogleModal () {
        this.modal = !this.modal
      }
    }
  }
</script>
