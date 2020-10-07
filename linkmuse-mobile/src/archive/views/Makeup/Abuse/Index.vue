<template>
  <div>
    <a @click="openModal" href="javascript:void(0)" class="lm-primary-button">Пожаловатся</a>
    <mt-popup class="lm-m-modal-wrap lm-m-abuse" v-model="modal" position="center" :modal="true">
      <template v-if="step == 1">
        <div class="title">
          <strong>ВЫБЕРИТЕ ПРИЧИНУ</strong>
        </div>
        <div class="lm-radio-buttons">
          <li>
            <input id="type-1" type="radio">
            <label for="type-1">Оскорбительное поведение</label>
          </li>
          <li>
            <input id="type-1" type="radio">
            <label for="type-1">Мошенничество</label>
          </li>
          <li>
            <input id="type-1" type="radio">
            <label for="type-1">Призыв к суициду</label>
          </li>
          <li>
            <input id="type-1" type="radio">
            <label for="type-1">Пропаганда наркотиков / насилия / экстримизма</label>
          </li>
          <li>
            <input id="type-1" type="radio">
            <label for="type-1">Действия противор. законодательству РФ</label>
          </li>
          <li>
            <input id="type-1" type="radio">
            <label for="type-1">Предложения порнографического характера</label>
          </li>
          <li>
            <input id="type-1" type="radio">
            <label for="type-1">Другое</label>
          </li>
        </div>
        <div class="lm-m-abuse-actions">
          <a @click="nextStep" href="javascript:void(0)" class="lm-primary-button middle disabled">Далее</a>
        </div>
      </template>
      <template v-if="step == 2">
        <div class="title">
          <strong>Добавьте комментарий</strong>
          <span>мошенничество</span>
        </div>
        <div class="lm-input-wrap">
          <textarea class="lm-input"></textarea>
        </div>
        <div class="lm-m-abuse-actions">
          <a href="javascript:void(0)" class="lm-back-button"></a>
          <a href="javascript:void(0)" class="lm-primary-button middle">Пожаловатся</a>
        </div>
      </template>
    </mt-popup>
  </div>
</template>
<script>
  import { Popup } from 'mint-ui'
  export default {
    components: { 'mt-popup': Popup },
    metaInfo: {
      title: 'Пожаловаться (модалка)'
    },
    data () {
      return {
        modal: false,
        step: 2
      }
    },
    computed: {},
    methods: {
      openModal () {
        this.modal = true
      },
      nextStep () {
        this.step++
      }
    }
  }
</script>
