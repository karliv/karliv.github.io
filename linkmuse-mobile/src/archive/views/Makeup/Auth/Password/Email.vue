<template>
    <div class="lm-m-register-page">
        <div class="wrapper lm-m-register-page-wrapper" v-if="step === 1">
            <a href="/" class="lm-logo">
                <img src="/dist/img/lm-logo.svg" alt="" class="lm-logo--img">
            </a>
            <div class="lm-m-register-wrap-form">
                <h1 class="lm-m-register-page--title">Восстановление пароля</h1>
                <div class="lm-input-wrap">
                    <input autocapitalize=off tabindex="1" type="text" class="lm-input ok" placeholder="E-mail">
                </div>

                <div>
                    <button @click="nextStep" href="javascript:void(0)" class="lm-secondary-button">Продолжить</button>
                </div>
                <div>
                    <a href="javascript:void(0)" style="font-size: 12px" class="lm-m-login-link lm-link-button">НАЗАД</a>
                </div>
            </div>
            <div></div>
        </div>
        <div class="wrapper lm-m-register-page-wrapper" v-if="step === 2">
            <a href="/" class="lm-logo">
                <img src="/dist/img/lm-logo.svg" alt="" class="lm-logo--img">
            </a>
            <div class="lm-m-register-wrap-form">
                <h1 class="lm-m-register-page--title">Восстановление пароля</h1>
                <div class="lm-m-register-page-recovery-text">
                    На почту <a href="javascript:void(0)">ol5478@ya.ru</a> отправлены инструкции по восстановлению пароля ✌
                </div>
                <div>
                    <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button">Продолжить</button>
                </div>
            </div>
            <div></div>
        </div>
        <div class="wrapper lm-m-register-page-wrapper" v-if="step === 3">
            <a href="/" class="lm-logo">
                <img src="/dist/img/lm-logo.svg" alt="" class="lm-logo--img">
            </a>
            <div class="lm-m-register-wrap-form">
                <h1 class="lm-m-register-page--title">Восстановление пароля</h1>
                <div class="lm-input-wrap">
                    <input tabindex="1" type="text" class="lm-input" placeholder="Новый пароль">
                </div>
                <div class="lm-input-wrap">
                    <input tabindex="1" type="text" class="lm-input" placeholder="Повторите пароль">
                </div>
                <div>
                    <button @click="nextStep" href="javascript:void(0)" class="lm-primary-button">Войти</button>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Восстановление пароля',
    },
    data () {
      return {
        step: 1,
      }
    },
    methods: {
      nextStep () {
        this.step++
      },
    }
  }
</script>
