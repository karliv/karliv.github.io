<template>
  <div>
    <div class="lm-m-register-steps">
      <div style="width: 10%"></div>
    </div>
    <div v-if="step == 1" class="lm-m-cs-register">
      <div class="lm-m-cs-register-wrap">
        <div class="title">Заполните данные о себе</div>
        <div class="desc">Чтобы получать деньги за заказы, введите все необходимые данные. Мы не передаём информацию третьим лицам</div>
        <div class="lm-radio-buttons">
          <span>Вы:</span>
          <li>
            <input id="type-1" type="radio">
            <label for="type-1">Юридическое лицо</label>
          </li>
          <li>
            <input id="type-2" type="radio">
            <label for="type-2">ИП</label>
          </li>
        </div>
        <div class="separator"></div>
        <div class="lm-input-wrap">
          <label for="">ФИО:</label>
          <input type="text" class="lm-input" placeholder="Иванов Иван Иванович">
        </div>
        <div class="lm-input-wrap">
          <label for="">Телефон:</label>
          <input type="text" class="lm-input error" placeholder="+7 (000) 000-00-00">
          <span class="lm-input-error">введите номер полностью</span>
        </div>
        <div class="lm-input-wrap">
          <label for="">Название организации:</label>
          <input type="text" class="lm-input" placeholder="ООО Название">
        </div>
        <div class="lm-input-wrap">
          <label for="">ИНН:</label>
          <input type="text" class="lm-input error" placeholder="0000 0000 0000">
          <span class="lm-input-error">введите номер полностью</span>
        </div>
        <div class="lm-input-wrap">
          <label for="">кпп:</label>
          <input type="text" class="lm-input" placeholder="0000 0000 0">
        </div>
        <div class="separator"></div>
        <div class="lm-input-wrap">
          <label for="">банк-получатель:</label>
          <input type="text" class="lm-input" placeholder="Сбербанк">
        </div>
        <div class="lm-input-wrap">
          <label for="">корр-счет:</label>
          <input type="text" class="lm-input" placeholder="0000 0000 0000 0000 0000">
        </div>
        <div class="lm-input-wrap">
          <label for="">бик:</label>
          <input type="text" class="lm-input" placeholder="0000 0000 0">
        </div>
        <div class="separator"></div>
        <div class="lm-input-wrap">
          <label for="">юридический адрес:</label>
          <input type="text" class="lm-input" placeholder="Адрес">
        </div>
        <div class="lm-input-wrap">
          <label for="">фактический адрес:</label>
          <input type="text" class="lm-input" placeholder="Адрес">
        </div>
      </div>
      <div class="lm-action-buttons">
        <a href="javascript:void(0)" class="lm-link-button">назад</a>
        <button @click="nextStep" class="lm-primary-button middle">Продолжить</button>
      </div>
    </div>
    <div v-if="step == 2" class="lm-m-cs-register">
      <div class="lm-m-cs-register-wrap">
        <div class="title">Заполните данные о себе</div>
        <div class="desc">Пожалуйста, прикрепите свои работы для оценки качества съёмки. Фотографии будут отображаться в вашем профиле, после одобрения заявки</div>
        <div class="lm-m-upload-file-wrap no-upload">
          <i></i>
          <span>Загрузить файлы <br> (max 30)</span>
        </div>
        <div class="lm-m-upload-file-wrap">
          <div class="lm-m-upload-file-item">
            <i class="lm-m-remove"></i>
            <img src="https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png" alt="">
            <div class="lm-m-time">13:32</div>
          </div>
          <div class="lm-m-upload-file-item">
            <i class="lm-m-remove"></i>
            <img src="https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png" alt="">
          </div>
          <div class="lm-m-upload-file-item uploading">
            <i class="lm-m-remove"></i>
            <img src="https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png" alt="">
          </div>
          <div class="lm-m-upload-file-item uploading">
            <i class="lm-m-remove"></i>
            <i class="lm-error"></i>
            <img src="https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png" alt="">
          </div>
          <div class="lm-m-upload-file-item uploading">
            <i class="lm-m-remove"></i>
            <div class="lm-circle-loader">
              <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100"
                   preserveAspectRatio="xMidYMid" class="lds-ring" style="background: none;">
                <circle cx="50" cy="50" fill="none" r="16" stroke="#000000" stroke-width="0"/>
                <circle cx="50" cy="50" fill="none" r="16" stroke="#fff" stroke-width="4" stroke-linecap="round" transform="rotate(49.5442 50 50)">
                  <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;180 50 50;720 50 50"
                                    keyTimes="0;0.5;1" dur="4s" begin="0s" repeatCount="indefinite"/>
                  <animate attributeName="stroke-dasharray" calcMode="linear" values="50" keyTimes="0;0.5;1" dur="4"
                           begin="0s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <img src="https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png" alt="">
          </div>
        </div>
      </div>
      <div class="lm-action-buttons">
        <a href="javascript:void(0)" class="lm-link-button">назад</a>
        <button @click="nextStep" class="lm-primary-button middle">Отправить</button>
      </div>
    </div>
    <div v-if="step == 3" class="lm-m-cs-paid">
      <div class="lm-m-cs-paid-wrap">
        <div class="title">Заявка принята!</div>
        <div class="desc" style="margin-bottom: 40px">Ваша заявка будет рассмотрена в ближайшее время</div>
        <div class="desc">С нами уже 3200 специалистов!</div>
        <a href="javascript:void(0)" class="lm-outline-button middle">посмотреть всех</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Заполните данные о себе'
    },
    computed: {},
    data () {
      return {
        step: 1,
        modal: false,
        search: false
      }
    },
    methods: {
      nextStep () {
        this.step++
      },
    }
  }
</script>
