<template>
  <section class="lm-m-v2-notifications-item" v-show="init">
    <div class="notifications-avatar-wrap btn btn_round" @click="click(this)">
      <img class="notifications-avatar" :src="avatar['84x84']" v-if="avatar">
      <i :class="['notifications-avatar-icon', type]" v-if="!avatar"></i>
    </div>
    <div class="notifications-info-wrap ml_3">
      <div class="notifications__text" v-html="text" @click="click(this)"></div>
      <div class="notifications__date mt_2" v-if="date">{{ date | moment('DD MMMM YYYY') }}</div>
      <component v-if="actions" :is="actionTemplate" ></component>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import { has } from '@utils';
  import User from './mixins/User'
  import Other from './mixins/Other'
  import { CHECK } from './Enums/Types'
  import { mapGetters, mapActions } from 'vuex'
  import BoardCasting from './mixins/BoardCasting'
  import BoardLocation from './mixins/BoardLocation'
  import CertifyingSpecialist from './mixins/CertifyingSpecialist'

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
        has,
        text: '',
        avatar: '',
        type: CHECK,
        click: () => {},
        actions: '',
        init: false,
      }
    },
    watch: {
      init () {
        if (!this.init || this.read) return

        this.$emit('onRead', this.item)
      }
    },
    mounted() {
      if (!(this.isBoardCasting || this.isBoardLocation || this.isCertifyingSpecialist || this.isOther || this.isUser) && !this.read) {
        this.$emit('onRead', this.item)
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser'
      }),
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
          template: `<div>${this.actions}</div>`
        })
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
        this.click = has(options, 'click') ? () => { options.click(this) } : click
        this.init = true
      }
    }
  }
</script>
