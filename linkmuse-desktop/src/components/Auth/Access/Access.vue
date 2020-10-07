<template>
    <modal v-model="modal.show" @hide="close()" :header="false" :footer="false"
           :class="{ 'modal-access modal-center': true, 'blur': (modal.type === 'catalog') }"
           :backdrop="(modal.type !== 'catalog')">
            <i v-if="modal.type !== 'catalog'" class="icon-close2" @click="close()"></i>
            <div class="pd-26">
                <img src="/dist/img/icon/only_register.svg">
                <span v-if="(modal.castings === false)">Извините, <br> данный функционал доступен только для зарегистрированных пользователей</span>
                <span v-else-if="(modal.castings === true)">Каждый день мы добавляем кастинги.</span>

                <a href="javascript:void(0)" class="button write" @click="showRegisterModal()" v-if="modal.type == 'main'">Создать аккаунт</a>
                <a href="/register" class="button write"  v-if="!modal.type || modal.type === 'catalog'">Создать аккаунт</a>

                <div class="selected-role-auth-modal actions" v-if="modal.role.show">
                    <a href="javascript:void(0)" class="customer" @click="setRole(2)">Заказчик</a>
                    <a href="javascript:void(0)" class="talents" @click="setRole(1)">Исполнитель</a>
                </div>

                <a href="javascript:void(0)" class="link-account" v-if="modal.type === 'main'" @click="showLoginModal()">У вас уже есть аккаунт?</a>
                <a href="/login" class="link-account" v-if="!modal.type || modal.type === 'catalog'">У вас уже есть аккаунт?</a>
            </div>
            <div class="clr"></div>
        </modal>
</template>

<script>
import {
    addClass
} from "uiv/src/utils/domUtils";
export default {
    data() {
        return {
            modal: {
                show: false,
                role: {
                    show: false,
                    status: null
                },
                type: null,
                castings: false
            }
        }
    },
    created() {
         this.$root.$on('open-access-auth-modal', (type, castings = false) => {
             if (type === "catalog") {
                 let blurContent = document.getElementsByClassName('page-wrapper-main')[0];
                 addClass(blurContent, 'blur-content')
             }
            this.modal.type = type;
            this.modal.show = true;
            this.modal.castings = castings;
            try {
                localStorage.setItem('redirect.register', window.location.pathname);
            } catch(e) {}
        });
    },
    methods: {
        showRegisterModal () {
            this.modal.show = false;
            this.$router.push({ name: 'register' });
            this.$emit('show-register-modal');
        },
        showLoginModal () {
            this.modal.show = false;
            this.$router.push({ name: 'login' });
            this.$emit('show-login-modal');
        },
        // Удалить
        showSetRole () {
            if (this.modal.type !== 'main') {
                this.modal.role.show = true;
            } else {
                this.$root.$emit('show-register-modal');
                this.close();
            }
        },
        //
        setRole (role) {
            this.modal.role.status = role;
            this.openRegisterModal();
        },
        openRegisterModal () {
            this.$root.$emit('open-register-modal', this.modal.role.status);
        },
        openAuthModal () {
            if (this.modal.type !== 'main')
                this.$root.$emit('open-auth-modal');
            else {
                this.close();
                this.$root.$emit('show-login-modal');
            }

        },
        close () {
            if (this.modal.type !== 'catalog') {
                this.modal = {
                    show: false,
                    role: {
                        show: false,
                        role: null
                    },
                    type: null,
                    castings: false
                }
            }
        },
    }
}
</script>
