<template>
  <div>
    <div class="lm-m-register-page">
      <div class="lm-m-register-steps">
        <div style="width: 10%"></div>
      </div>
      <div class="wrapper lm-m-register-page-wrapper" v-if="step === 1">
        <a href="/" class="lm-logo">
          <img src="/dist/img/lm-logo.svg" alt="" class="lm-logo--img">
        </a>
        <div class="lm-m-register-wrap-form">
          <h1 class="lm-m-register-page--title">Создать аккаунт</h1>
          <div class="lm-input-wrap">
            <input tabindex="1" type="text" class="lm-input ok" placeholder="E-mail">
          </div>
          <div class="lm-input-wrap">
            <!--классы для инпутов спроси у меня-->
            <input id="lm_m_password" tabindex="2" type="password" class="lm-input lm-input--password ok"
                   placeholder="Пароль">
            <span style="display: none;" class="lm-input-error">минимум 6 символов</span>
            <!--тут как на линке v-if-->
            <div class="eye-show"></div>
            <div class="eye-hide"></div>
          </div>
          <div>
            <button @click="nextStep" href="javascript:void(0)" class="lm-secondary-button ">Создать</button>
          </div>
          <div>
            <a href="javascript:void(0)" class="lm-m-login-link">Войти в аккаунт</a>
          </div>
          <div class="lm-social">
            <div class="lm-social-vk"></div>
            <div class="lm-social-fb"></div>
            <div class="lm-social-google"></div>
          </div>
        </div>
        <div class="lm-m-language">
          <a href="javascript:void(0)" class="lm-m-language--ru"></a>
        </div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper" v-if="step === 2">
        <h1>Выберите тип деятельности</h1>
        <div class="lm-select-type--wrap">
          <div class="lm-select-type--item customer">
            <input checked id="profession_customer" type="radio" name="profession" value="customer">
            <label for="profession_customer">
              <i class="lm-post-register-icon-customer"></i>
              <span class="lm-post-register-label-icon">Заказчик</span>
            </label>
          </div>
          <div @click="nextStep" class="lm-select-type--item talent">
            <input id="profession_talent" type="radio" name="profession" value="customer">
            <label for="profession_talent">
              <i class="lm-post-register-icon-talent"></i>
              <span class="lm-post-register-label-icon">Исполнитель</span>
            </label>
          </div>
          <div style="width: 100%">
            <div style="display: none;" class="lm-post-register-step-1">
              <span>Позже можно будет создать двойной аккаунт</span>
              <span>Но для начала выберите свой основной тип</span>
            </div>
            <div class="lm-post-register-step-2">
              <span>Организовывайте кастинги</span>
              <span>Находите исполнителей</span>
            </div>
            <div style="display: none;" class="lm-post-register-step-2">
              <span>Взаимодействуйте с заказчиками</span>
              <span>Стройте карьеру в индустрии</span>
              <span>Привлекайте внимание</span>
            </div>
          </div>
          <div class="lm-m-post-register-fixed-bottom">
            <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle ">Продолжить</button>
          </div>
        </div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role" v-if="step === 3">
        <h1>Выберите статус</h1>
        <div class="lm-select-type--wrap">
          <div class="lm-select-type--item customer">
            <input checked id="customer_0" type="checkbox" name="profession" value="customer">
            <label for="customer_0">
              <i class="lm-post-register-icon-company"></i>
              <span class="lm-post-register-label-icon">компания</span>
            </label>
          </div>
          <div class="lm-select-type--item customer">
            <input id="customer_1" type="checkbox" name="profession" value="customer">
            <label for="customer_1">
              <i class="lm-post-register-icon-agent"></i>
              <span class="lm-post-register-label-icon">агент</span>
            </label>
          </div>
          <div class="lm-select-type--item customer">
            <input id="customer_2" type="checkbox" name="profession" value="customer">
            <label for="customer_2">
              <i class="lm-post-register-icon-producer"></i>
              <span class="lm-post-register-label-icon">продюссер</span>
            </label>
          </div>
          <div class="lm-select-type--item customer">
            <input id="customer_3" type="checkbox" name="profession" value="customer">
            <label for="customer_3">
              <i class="lm-post-register-icon-director"></i>
              <span class="lm-post-register-label-icon">режисер</span>
            </label>
          </div>
          <div class="lm-select-type--item customer">
            <input id="customer_4" type="checkbox" name="profession" value="customer">
            <label for="customer_4">
              <i class="lm-post-register-icon-casting-director"></i>
              <span class="lm-post-register-label-icon">кастинг-директор</span>
            </label>
          </div>
          <div class="lm-select-type--item customer">
            <input id="customer_5" type="checkbox" name="profession" value="customer">
            <label for="customer_5">
              <i class="lm-post-register-icon-photographer"></i>
              <span class="lm-post-register-label-icon">фотограф</span>
            </label>
          </div>
          <div class="lm-m-post-register-fixed-bottom">
            <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
            <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle ">Продолжить</button>
          </div>
        </div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role talent" v-if="step === 4">
        <h1>Чем вы занимаетесь?</h1>
        <div class="lm-select-type--wrap">
          <div class="lm-select-type--item talent">
            <input checked id="customer_0" type="checkbox" name="profession" value="customer">
            <label for="customer_0">
              <i class="lm-post-register-icon-actor"></i>
              <span class="lm-post-register-label-icon">Актер</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_1" type="checkbox" name="profession" value="talent">
            <label for="talent_1">
              <i class="lm-post-register-icon-model"></i>
              <span class="lm-post-register-label-icon">модель</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_2" type="checkbox" name="profession" value="talent">
            <label for="talent_2">
              <i class="lm-post-register-icon-musician"></i>
              <span class="lm-post-register-label-icon">музыкант</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_3" type="checkbox" name="profession" value="talent">
            <label for="talent_3">
              <i class="lm-post-register-icon-dancer"></i>
              <span class="lm-post-register-label-icon">танцор</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_4" type="checkbox" name="profession" value="talent">
            <label for="talent_4">
              <i class="lm-post-register-icon-leading"></i>
              <span class="lm-post-register-label-icon">ведущий</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_5" type="checkbox" name="profession" value="talent">
            <label for="talent_5">
              <i class="lm-post-register-icon-composer"></i>
              <span class="lm-post-register-label-icon">композитор</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_6" type="checkbox" name="profession" value="talent">
            <label for="talent_6">
              <i class="lm-post-register-icon-circus-artist"></i>
              <span class="lm-post-register-label-icon">артист цирка</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_7" type="checkbox" name="profession" value="talent">
            <label for="talent_7">
              <i class="lm-post-register-icon-photographer"></i>
              <span class="lm-post-register-label-icon">фотогораф видеограф</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_8" type="checkbox" name="profession" value="talent">
            <label for="talent_8">
              <i class="lm-post-register-icon-visagiste"></i>
              <span class="lm-post-register-label-icon">визажист стилист</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_9" type="checkbox" name="profession" value="talent">
            <label for="talent_9">
              <i class="lm-post-register-icon-designer"></i>
              <span class="lm-post-register-label-icon">художник дизайнер</span>
            </label>
          </div>
          <div class="lm-select-type--item talent">
            <input id="talent_10" type="checkbox" name="profession" value="talent">
            <label for="talent_10">
              <i class="lm-post-register-icon-film-crew"></i>
              <span class="lm-post-register-label-icon">участник съемочной группы</span>
            </label>
          </div>

          <div class="lm-m-post-register-fixed-bottom">
            <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
            <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle ">Продолжить</button>
          </div>
        </div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role center-form-fix" v-if="step === 5">
        <h1>Заполните информацию</h1>
        <div class="lm-m-post-register-enter-info">
          <div class="lm-input-wrap">
            <input type="text" class="lm-input" placeholder="Имя">
          </div>
          <div class="lm-input-wrap">
            <input type="text" class="lm-input" placeholder="Фамилия">
          </div>
          <div class="lm-m-post-register-select-sex">
            <ul class="lm-radio-buttons">
              <li>
                <input checked name="radio" type="radio" id="male">
                <label for="male">
                  <span>Мужской</span>
                  <i class="lm-sex-male-icon"></i>
                </label>
              </li>
              <li>
                <input name="radio" type="radio" id="female">
                <label for="female">
                  <span>Женский</span>
                  <i class="lm-sex-female-icon"></i>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div class="lm-m-post-register-fixed-bottom">
          <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
          <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle ">Продолжить</button>
        </div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role center-form-fix" v-if="step === 6">
        <h1>Заполните информацию</h1>
        <div class="lm-m-post-register-enter-info">
          <div class="lm-m-upload-avatar-wrap">
            <input type="file" id="upload-avatar">
            <label class="lm-m-upload-avatar" for="upload-avatar">
              <i class="lm-icon-square-upload"></i>
              <span>Аватар</span>
            </label>
          </div>
          <div class="lm-input-wrap">
            <input type="text" class="lm-input" placeholder="Имя">
          </div>
          <div class="lm-input-wrap">
            <input type="text" class="lm-input" placeholder="Фамилия">
          </div>
          <div class="lm-input-wrap">
            <input type="date" class="lm-input" placeholder="Дата рождения">
          </div>
          <div class="lm-m-post-register-select-sex">
            <ul class="lm-radio-buttons">
              <li>
                <input checked name="radio" type="radio" id="male">
                <label for="male">
                  <span>Мужской</span>
                  <i class="lm-sex-male-icon"></i>
                </label>
              </li>
              <li>
                <input name="radio" type="radio" id="female">
                <label for="female">
                  <span>Женский</span>
                  <i class="lm-sex-female-icon"></i>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div class="lm-m-post-register-fixed-bottom">
          <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
          <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle ">Продолжить</button>
        </div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role center-form-fix" v-if="step === 7">
        <h1>Заполните информацию</h1>
        <div class="lm-m-post-register-enter-info">
          <div class="lm-m-upload-avatar-wrap">
            <img @click="toogleModalEditAvatar()" src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/background/dc/aC/dcaCAlpSKRlWi4YzoKoS-211x211.png" class="lm-m-upload-avatar-image" alt="">
          </div>
          <div class="lm-input-wrap">
            <input type="text" class="lm-input" placeholder="Имя">
          </div>
          <div class="lm-input-wrap">
            <input type="text" class="lm-input" placeholder="Фамилия">
          </div>
          <div class="lm-input-wrap">
            <input type="date" class="lm-input" placeholder="Дата рождения">
          </div>
          <div class="lm-m-post-register-select-sex">
            <ul class="lm-radio-buttons">
              <li>
                <input checked name="radio" type="radio" id="male">
                <label for="male">
                  <span>Мужской</span>
                  <i class="lm-sex-male-icon"></i>
                </label>
              </li>
              <li>
                <input name="radio" type="radio" id="female">
                <label for="female">
                  <span>Женский</span>
                  <i class="lm-sex-female-icon"></i>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div class="lm-m-post-register-fixed-bottom">
          <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
          <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle ">Продолжить</button>
        </div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role center-form-fix" v-if="step === 8">
        <h1>Подтвердите номер телефона</h1>
        <div class="lm-m-post-register-enter-info">
          <div class="lm-input-wrap">
            <input type="text" class="lm-input" placeholder="Номер">
          </div>
          <div class="lm-center">
            <a @click="nextStep" style="width: 100%;box-sizing: border-box" href="javascript:void(0)" class="lm-primary-button disabled">Отправить код</a>
          </div>
          <div class="desc">
            <span>Ваш телефон будет показан только при отклике на кастинг</span>
            <span>Ваш телефон будет скрыт, он необходим для модерации</span>
          </div>
        </div>
        <div class="fix"></div>

      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role center-form-fix" v-if="step === 9">
        <h1>Подтвердите номер телефона</h1>
        <div class="lm-m-post-register-enter-info">
          <div class="lm-input-wrap">
            <input type="text" class="lm-input error" placeholder="Номер">
            <div class="lm-text-error">Номер введен не полностью</div>
          </div>
          <div class="lm-center">
            <a @click="nextStep" style="width: 100%;box-sizing: border-box" href="javascript:void(0)" class="lm-primary-button disabled">Отправить код</a>
          </div>
          <div class="desc">
            <span>Ваш телефон будет показан только при отклике на кастинг</span>
            <span>Ваш телефон будет скрыт, он необходим для модерации</span>
          </div>
        </div>
        <div class="fix"></div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role center-form-fix" v-if="step === 10">
        <h1>Подтвердите номер телефона</h1>
        <div class="lm-m-post-register-enter-info">
          <div class="lm-input-wrap">
            <input type="text" class="lm-input ok" placeholder="+7 (900) 000-00-00">
          </div>
          <div class="lm-center">
            <a @click="nextStep" style="width: 100%;box-sizing: border-box" href="javascript:void(0)" class="lm-outline-button">Отправить код</a>
          </div>
          <div class="desc">
            <span>Ваш телефон будет показан только при отклике на кастинг</span>
          </div>
        </div>
        <div class="fix"></div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role center-form-fix" v-if="step === 11">
        <h1>Подтвердите номер телефона</h1>
        <div class="lm-m-post-register-enter-info">
          <div class="lm-input-wrap no-editable">
            <input type="text" class="lm-input" placeholder="+7 (900) 000-00-00">
            <a @click="prevStep" href="javascript:void(0)" class="edit">изменить</a>
          </div>
          <div class="lm-input-wrap">
            <input type="text" class="lm-input error" placeholder="Код">
            <div class="lm-text-error">код введен не полностью</div>
          </div>

          <div class="desc sending-code">
            <span>отправить код повторно:</span>
            <div class="counter">59 сек</div>
            <a @click="nextStep" href="javascript:void(0)" class="send-code">отправить код повторно</a>
          </div>
        </div>
        <div class="fix"></div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role center-form-fix" v-if="step === 12">
        <h1>Подтвердите номер телефона</h1>
        <div class="lm-m-post-register-enter-info">
          <div class="lm-input-wrap no-editable">
            <input type="text" class="lm-input" placeholder="+7 (900) 000-00-00">
            <a @click="successToast" href="javascript:void(0)" class="edit">изменить</a>
          </div>
          <div class="lm-input-wrap">
            <input type="text" class="lm-input ok lm-loader" value="5574">
          </div>

          <div class="desc sending-code">
            <span>отправить код повторно:</span>
            <div class="counter">59 сек</div>
          </div>
        </div>
        <div class="fix"></div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role" v-if="true === false">
        <h1 style="margin-bottom: 12px;">Загрузите портфолио</h1>
        <div class="sub-title">Этот шаг можно пропустить</div>
        <div class="lm-m-post-register-enter-info portfolio">
          <div class="portfolio-wrap">
            <div class="lm-m-post-register-portfolio--item first">
              <i class="lm-icon-square-upload"></i>
              <span class="desc">Портретное фото</span>
            </div>
            <div class="lm-m-post-register-portfolio--item second">
              <i class="lm-icon-square-upload"></i>
              <span class="desc">Фото в полный рост</span>
            </div>
            <div class="lm-m-post-register-portfolio--item second">
              <i class="lm-icon-square-upload"></i>
              <span class="desc">Фото в полный рост</span>
            </div>
            <div class="lm-m-post-register-portfolio--item three">
              <i class="lm-icon-square-upload"></i>
              <span class="desc">Видео</span>
            </div>
          </div>
          <div class="lm-input-wrap">
            <input type="text" class="lm-input" placeholder="Добавьте ссылку">
            <span class="desc">Вместо загрузки видео вы можете указать ссылку на Youtube,
Rutube, Vimeo и другие</span>
          </div>
        </div>
        <div class="lm-m-post-register-fixed-bottom">
          <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
          <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle">завершить</button>
        </div>
      </div>
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role" v-if="true === false">
        <h1 style="margin-bottom: 12px;">Загрузите портфолио</h1>
        <div class="sub-title">Этот шаг можно пропустить</div>
        <div class="lm-m-post-register-enter-info portfolio">
          <div class="portfolio-wrap">
            <div class="lm-m-post-register-portfolio--item first uploaded">
              <div class="item-wrap">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9z/t9/9zt9hhPjqC4uxDuAKsEB.jpg" alt="">
                <i class="remove"></i>
              </div>
            </div>
            <div class="lm-m-post-register-portfolio--item second uploaded error">
              <div class="item-wrap">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9z/t9/9zt9hhPjqC4uxDuAKsEB.jpg" alt="">
                <i class="remove"></i>
                <i class="error-icon"></i>
              </div>
            </div>
            <div class="lm-m-post-register-portfolio--item second uploaded loaded">
              <div class="item-wrap">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9z/t9/9zt9hhPjqC4uxDuAKsEB.jpg" alt="">
                <i class="loaded"></i>
              </div>
            </div>
            <div class="lm-m-post-register-portfolio--item three uploaded">
              <div class="item-wrap">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9z/t9/9zt9hhPjqC4uxDuAKsEB.jpg" alt="">
                <i class="remove"></i>
              </div>
            </div>
          </div>
          <div class="lm-input-wrap">
            <input type="text" class="lm-input ok" placeholder="Добавьте ссылку">
            <span class="desc">Вместо загрузки видео вы можете указать ссылку на Youtube,
Rutube, Vimeo и другие</span>
          </div>
        </div>
        <div class="lm-m-post-register-fixed-bottom">
          <a @click="prevStep" href="javascript:void(0)" class="lm-link-button">назад</a>
          <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle">завершить</button>
        </div>
      </div>
      <div class="lm-m-modal-wrap" v-if="modal">
        <div class="lm-m-modal-backdoor" @click="toogleModalEditAvatar">
          <div class="close"></div>
        </div>
        <div class="lm-m-modal-list-menu">
          <a href="javascript:void(0)" class="lm-m-modal-list-menu--item">
            <span>Изменить фото</span>
          </a>
          <a href="javascript:void(0)" class="lm-m-modal-list-menu--item">
            <span class="remove">Удалить фото</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    metaInfo: {
      title: 'Регистрация',
    },
    data () {
      return {
        step: 8,
        modal: false
      }
    },
    methods: {
      successToast () {
        Toast({
          message: 'Регистрация завершена',
          iconClass: 'mintui mintui-success',
        })
      },
      nextStep () {
        this.step++
      },
      prevStep () {
        if(this.step == 1) return
        this.step--
      },
      toogleModalEditAvatar() {
        this.modal = !this.modal
      }
    }
  }
</script>
