<template>
    <div class="ss-dialog-wrap">
        <div class="ss-dialog-head">
            <slot name="header">
                <b>Диалог</b>
            </slot>
            <i class="icon-search_L2" v-if="!messages.loading" style="display: none;"></i>
            <loader v-if="messages.loading"></loader>
        </div>
        <div class="ss-dialog-messages" v-chat-scroll @scroll-top="fetchMessages()">
            <div v-for="(messages, date) in dates" :key="`messages_${date}`">
                <div class="date-message">
                    <span>{{ isToday(date) ? 'сегодня' : ($options.filters.moment([ date, "DD-MM-YYYY" ], 'D MMM')) }}</span>
                </div>

                <chat-message v-for="message in messages" :key="message.id"
                    :message="message">
                </chat-message>
            </div>
        </div>
        <div v-if="typing" class="typing">
            <div class="typing-message">
                <div class="bt"></div>
                <div class="bt"></div>
                <div class="bt"></div>
            </div>
            <span>Печатает сообщение</span>
        </div>
        <div class="ss-dialog-text-write">
            <chat-input :uid="uid" :recipient_id="recipient_id" @send="_handleSendMessage" @presend="_handlePreSendMessage" @error="_handleErrorSendMessage"></chat-input>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ChatMessage from './helpers/Message.vue';
import ChatInput from './helpers/Input.vue';

const LIMIT = 25;

export default {
    components: { ChatMessage, ChatInput },
    props: {
        order_id: {
            type: Number,
            required: true
        },
        uid: {
            type: String,
            required: true
        },
        recipient_id: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/getAuthUser',
            isAuthorized: 'auth/isAuthorized'
        }),
        dates() {
            let { data } = this.messages;
            return this._.groupBy(data, item => item.date)
        }
    },
    data() {
        return {
            typing: false,
            messages: {
                data: [],
                loading: false,
                count: 0,
                offset: 0,
                limit: LIMIT
            }
        }
    },
    mounted() {
        this.fetchMessages();

        if (this.isAuthorized && this.user) {
          this.$echo.private('user.' + this.user.id).listen('Message\\MessageWasReceived', ({ data }) => {
            let { uid } = data

            if (uid != this.uid) return

            this.messages.data.push(data);
            this.messages.offset++;
          });
        }

        let typing = null;
        this.$echo.private(`dialog.${this.uid}`).listenForWhisper('typing', (e) => {
            if (e.dialog_id === this.uid) {
                this.typing = e.typing;

                clearTimeout(typing);
                typing = setTimeout(() => {
                    this.typing = false
                }, 900);
            }
        });
    },
    methods: {
        fetchMessages() {
            if (this.messages.loading) return;

            this.messages.loading = true;

            let { offset, limit } = this.messages;

            this.$api.get(`api/v1/dialogs/${this.uid}/messages`, { offset, limit }).then(response => {
                let { data: { data, meta: { count, new_offset } } } = response;

                this.messages = {
                    data: data.concat(this.messages.data),
                    loading: false,
                    offset: new_offset,
                    count: count,
                    limit: LIMIT
                };

            }).catch((err) => {
                this.loading = false;
                throw new Error(`Error fetch messages in order ${this.order_id}`);
            });
        },
        isToday(date) {
            let context = this.$moment(date, 'DD-MM-YYYY');
            return this.$moment().isSame(context, 'd');
        },
        _handleSendMessage(message, uuid) {
            let index = this.messages.data.map((msg) => msg.uuid).indexOf(uuid);
            if (index > -1) {
                this.$set(this.messages.data, index, message);
                this.messages.offset++;
            }
        },
        _handlePreSendMessage(message) {
            this.messages.data.push(message);
        },
        _handleErrorSendMessage(uuid) {
            let index = this.messages.data.map((msg) => msg.uuid).indexOf(uuid);
            if (index > -1) {
                this.messages.data[index]['error'] = true;
            }
        }
    }
}
</script>

<style lang="sass">
    .typing
        position: relative
        margin-top: 5px
        padding-left: 26px
        color: #B5B9C0
        font-size: 12px
        text-align: left
        margin-bottom: 8px
        span
            padding-left: 7px
</style>
