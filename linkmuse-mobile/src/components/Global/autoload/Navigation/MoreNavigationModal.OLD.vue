<template>
  <mt-popup class="lm-m-modal-wrap lm-m-more-navigation-modal" position="bottom" v-model="modal.value">
    <div class="lm-m-modal-no-auth">
      <div class="lm-m-modal-logo">
        <router-link :to="{ name: 'index' }" @click.native="_handleCloseModal">
          <img src="/dist/img/lm-logo.svg" alt="linkmuse">
        </router-link>
      </div>
      <template v-if="isAuthorized">
        <div class="lm-m-modal-action">
          <template v-if="hasSecondaryUser">
            <div class="lm-m-modal-action-change">
              <template v-if="(role === 'customer')">
                <a href="javascript:void(0)" class="lm-primary-button">Заказчик</a>
                <a href="javascript:void(0)" class="lm-outline-button disabled" @click="_handleClickCreateAccount()">Талант</a>
              </template>

              <template v-if="(role === 'executor')">
                <a href="javascript:void(0)" class="lm-primary-button">Талант</a>
                <a href="javascript:void(0)" class="lm-outline-button disabled" @click="_handleClickCreateAccount()">Заказчик</a>
              </template>
            </div>
          </template>

          <template v-else-if="(!hasSecondaryUser)">
            <a href="javascript:void(0)" class="lm-primary-button" v-if="(role === 'executor')" @click="_handleClickCreateAccount(2)">Создать аккаунт заказчика</a>
            <a href="javascript:void(0)" class="lm-primary-button" v-if="(role === 'customer')" @click="_handleClickCreateAccount(1)">Создать аккаунт таланта</a>
          </template>
        </div>
        <div class="lm-m-modal-links">
          <template v-if="isExecutor">
            <router-link :to="{ name: 'certifying.executor.orders.index' }" @click.native="_handleCloseModal">Мои заказы</router-link>
            <router-link :to="{ name: 'certifying.executor.index' }" @click.native="_handleCloseModal">Верификация</router-link>
          </template>
          <template v-else-if="isCustomer">
            <template v-if="isCertifyingSpecialist">
              <router-link :to="{ name: 'certifying.customer.orders.index' }" @click.native="_handleCloseModal">Мои заказы</router-link>
            </template>
            <template v-if="isCertifyingSpecialist === false">
              <router-link :to="{ name: 'certifying.customer.index' }" @click.native="_handleCloseModal">Верификация</router-link>
            </template>
          </template>

          <router-link :to="{ name: 'talents.index' }" @click.native="_handleCloseModal">Таланты</router-link>
          <router-link :to="{ name: 'interviews.index' }" @click.native="_handleCloseModal">Блог</router-link>
          <a class="exit" href="javascript:void(0)" @click="_handleClickLogout">Выйти</a>
        </div>
      </template>
      <template v-else-if="(!isAuthorized)">
        <div class="lm-m-modal-links">
          <router-link :to="{ name: 'register' }" class="lm-primary-button" @click.native="_handleCloseModal">Регистрация</router-link>
          <router-link :to="{ name: 'login' }" class="exit" @click.native="_handleCloseModal">Войти</router-link>
        </div>
      </template>
      <template v-if="0">
        <div class="lm-social-wrap">
          <div class="text">Наши соц. сети</div>
          <div class="lm-social">
            <a href="https://vk.com/link_muse" target="_blank"><div class="lm-social-vk"></div></a>
            <a href="https://www.facebook.com/linkmuseofficial" target="_blank"><div class="lm-social-fb"></div></a>
            <a href="https://www.instagram.com/linkmuse/" target="_blank"><div class="lm-social-inst"></div></a>
          </div>
        </div>
      </template>
    </div>
  </mt-popup>
</template>

<script>
import { Toast, Popup, Indicator } from 'mint-ui'
import { mapGetters } from 'vuex'

export default {
  components: { 'mt-popup': Popup },
  data () {
    return {
      modal: {
        value: false
      }
    }
  },
  computed: {
    ...mapGetters({
      role: 'auth/getRole',
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized',
      isRegistered: 'auth/isRegistered'
    }),
    hasSecondaryUser () {
      return (this.user && this.user.hasOwnProperty('secondary_user')) ? this.user['secondary_user'] : false
    },
    isCustomer () {
      return (this.role === 'customer')
    },
    isExecutor () {
      return (this.role === 'executor')
    },
    isCertifyingSpecialist () {
      return (this.isCustomer && this.user && this.user['certifying_specialist_status'] === 'activated')
    }
  },
  mounted () {
    this.$root.$on('open-modal-more-navigation', () => {
      this.modal.value = true
    })
  },
  methods: {
    _handleCloseModal () {
      this.modal.value = false
    },
    async _handleClickLogout () {
      try {
        let logout = await this.$auth.logout();

        let redirection = '/' // Default route
        this.$store.dispatch('auth/destroyToken', { reload: true }).then(res => {
          if (this.$route.query.redirect && authentication) {
            redirection = this.$route.query.redirect
          }
          this._handleCloseModal()
          this.$router.replace(redirection)
        }, err => {
          if (err) {}
          this._handleCloseModal()
          this.$router.replace(redirection)
        });

      } catch (error) {
        // Error in Logout
        console.log(error);
        this._handleCloseModal()
        this.$store.dispatch('auth/destroyToken', { reload: true })
      }
    },
    _handleClickCreateAccount (selectedRole = null) {
      Indicator.open()

      this.$api.patch('api/v1/auth/role').then((response) => {
        let { data: { token, role } } = response

        this.$auth.storeSession({ token, role })

        this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
          this.$store.dispatch('auth/getUserByAPI').then(result => {
            Indicator.close()
            this._handleCloseModal()
            Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });
            if (selectedRole) this.$localStorage.set('register.role', selectedRole)
            
            this.$nextTick(() => {
              if (this.isRegistered === false) this.$router.push({ name: 'user.register' })
            })
          })
        })
      }, (error) => {
        const { response: { data }, response: { status }} = error
        Indicator.close()
      })
    }
  }
}
</script>

<style scoped>

</style>
