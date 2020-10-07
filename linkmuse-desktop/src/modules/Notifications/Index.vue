<template>
  <div class="section d-card__section" v-show="init">
    <div class="notification">
      <div :class="[{ actions: 'd-row justify_between' }]">
        <div class="d-row align_center">
          <div v-if="!avatar"
               :class="['cursor_pointer', 'd-btn', 'd-btn_round', info || check || eye ? 'd-btn_primary' : alert_danger ? 'bg-color_support-1' : alert_warn ? 'bg-color_support-3' : '' ]"
               @click="click(this)">
            <svg class="d-icon d-icon_size_16 fill_white">
              <use v-if="info || alert_warn || alert_danger" xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
              <use v-if="eye" xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-eye"/>
              <use v-if="check" xlink:href="/dist/web/img/icons/svg/sprite.svg#round-lm-check"/>
            </svg>
          </div>
          <div class="d-column w_auto">
            <img v-if="avatar" :src="avatar['84x84']" alt="user avatar" class="d-img border-radius_8 d-img_size_40">
          </div>
          <div class="d-column ml_4 w_100">
            <div class="notification__text cursor_pointer" v-html="text" @click="click(this)"></div>
            <div class="notification__date mt_1" v-if="date">{{ date | moment('DD MMMM YYYY') }}</div>
          </div>
          <component v-if="actions && !loading" :is="actionTemplate"></component>
          <lm-loader v-if="loading"></lm-loader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { has } from '@utils';
  import User from './mixins/User'
  import Other from './mixins/Other'
  import { mapGetters, mapActions } from 'vuex'
  import BoardCasting from './mixins/BoardCasting'
  import BoardLocation from './mixins/BoardLocation'
  import CertifyingSpecialist from './mixins/CertifyingSpecialist'
  import { CHECK, EYE, INFO, ALERT_WARN, ALERT_DANGER } from './Enums/Types'

  export default {
    mixins: [User, Other, BoardCasting, BoardLocation, CertifyingSpecialist],
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        CHECK, EYE, INFO, ALERT_WARN, ALERT_DANGER,
        has,
        text: '',
        avatar: '',
        type: CHECK,
        click: () => {
        },
        actions: '',
        init: false,
        loading: false
      }
    },
    watch: {
      init () {
        if (!this.init || this.read) return

        this.$emit('onRead', this.item)
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        role: 'auth/getRole',
      }),
      isCustomer () {
        return (this.role === 'customer')
      },
      isExecutor () {
        return (this.role === 'executor')
      },
      read () {
        return this.item.read
      },
      from () {
        if (this.grouped) return this.item.from.data[0]

        return this.item.from.data
      },
      grouped () {
        return (has(this.item, 'count') && this.item.from.data.length > 1)
      },
      count () {
        if (!this.grouped) return

        return (this.item.from.data.length - 1)
      },
      date () {
        return has(this.item, 'created_at') ? this.item.created_at : null
      },
      actionTemplate () {
        return Vue.component('notification-actions', {
          template: `<div class="d-row w_auto ml_4 align_end">${this.actions}</div>`
        })
      },
      eye () {
        return this.type === EYE
      },
      info () {
        return this.type === INFO
      },
      alert_warn () {
        return this.type === ALERT_WARN
      },
      alert_danger () {
        return this.type === ALERT_DANGER
      },
      check () {
        return this.type === CHECK
      }
    },
    methods: {
      ...mapActions({
        setNotificationOnCatalogFiledById: 'notification/setNotificationOnCatalogFiledById'
      }),
      _handleInit (options, click) {
        this.type = has(options, 'avatar') ? '' : options.type
        this.text = options.text(this)
        this.avatar = has(options, 'avatar') ? options.avatar(this) : ''
        this.actions = has(options, 'actions') ? options.actions(this) : ''
        this.click = has(options, 'click') ? () => {
          options.click(this)
        } : click
        this.init = true
      }
    }
  }
</script>
