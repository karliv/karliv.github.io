<template>
    <div :class="[{}, 'ss-dialog-messages-item']">
        <div class="lm-user-block">
            <img :src="message.from.data.avatar" :alt="message.from.data.name" class="lm-user-block-avatar"> 
            <div class="lm-user-block-info">
                <div class="lm-user-block-info-name">{{ message.from.data.name }} <span class="time">{{ message.sent_time }}</span></div> 
                <div class="lm-user-block-info-text">
                    <span v-html="text"></span>
                </div>
                <div class="error-wrp" v-if="message.error"><div class="error">!</div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            required: true
        }
    },
    computed: {
        text() {
            let { text } = this.message;

            if (text) {
                text = this.$striptags(text); // Removed all tags
                text = this.$nl2br(text); // nl2br to <br>
                text = this.$emoji(text); // :emoji: to <img>
                text = this.$anchorme(text); // find link and to <a>
            }
            
            return text;
        },
        thumbs_attachments() {
            let attachments = this.message.attachments.filter((item) => {
                if (item.type === 'photo') {
                    item.path_message = item.path_260 ? item.path_260 : item.path;
                }
                return ((item.type === 'photo') || (item.type === 'video'));
            });

            return attachments;
        },
        other_attachments() {
            let attachments = this.message.attachments.filter((item) => {
                return ((item.type === 'audio') || (item.type === 'document'));
            });

            return attachments;
        },
        audios() {
            return this.message.attachments.filter((attach) => {
                return (attach.type == 'audio');
            });
        }
    }
}
</script>

<style lang="sass">
    .ss-dialog-messages-item
        position: relative
        .error-wrp
            top: 0;
            right: 0;
            color: #FC2E5F;
            font-size: 14px;
            line-height: 22px;
            height: 22px;
            margin-right: 10px;
            position: absolute;
            .error
                color: #FC2E5F;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                border: solid 2px #FC2E5F;
                font-size: 14.5px;
                width: 22px;
                height: 22px;
                text-align: center;
                cursor: pointer;
</style>
