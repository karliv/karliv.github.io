<template>
  <div class="lm-m-cs-select-meeting lm-m-fullh-page">
    <div class="lm-m-cs-select-meeting--wrap">
      <div class="title">Выберите время проведения верификации</div>
      <div class="desc">После выбора будет объявлена встреча, не опоздайте на неё</div>
      <div class="content-select-time">
        <div class="content-select-time--line" v-for="(date, index) in dates" :key="index">
          <span class="day">{{ index | moment('ddd') | uppercase }}, {{ index | moment('DD MMMM') }} </span>
          <div class="times lm-flex">
            <div v-for="datetime in date" :key="`${index}_${datetime}`">
              <lm-tooltip @input="showTooltip = $event" :value="(meeting_at === datetime) && showTooltip" pop-transition="popup-fade" :content="meeting[datetime]">
                  <span :class="[ {selected: (meeting_at === datetime) }, 'times-item border executor']"
                        @click="setMeetingAt(datetime)">
                        {{ datetime | moment('HH:mm') }}
                  </span>
              </lm-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lm-action-buttons lm-bottom-actions-buttons">
      <a href="javascript:void(0)" class="lm-link-button">назад</a>
      <button class="lm-primary-button middle" @click="confirmMeeting(meeting_at)">Выбрать</button>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { Toast, Indicator } from 'mint-ui'

  export default {
    props: {
      order_id: {
        type: Number,
        required: true
      },
      meeting: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        has,
        meeting_at: null,
        loading: false,
        success: false,
        error: false,
        showTooltip: false
      }
    },
    computed: {
      dates () {
        return this._.groupBy(Object.keys(this.meeting), (result) => this.$moment(result, 'Y-MM-DD').startOf('day').format('Y-MM-DD'))
      }
    },
    methods: {
      setMeetingAt (time) {
        this.meeting_at = time
        this.showTooltip = true
      },
      confirmMeeting (meeting_at) {
        if (!meeting_at) return

        Indicator.open()
        this.loading = true

        this.$api.post(`/api/v2/certifying-specialists/orders/${this.order_id}/status/confirm_meeting_client`, { datetime: meeting_at }).then((response) => {
          this.loading = false
          this.success = true
          this.error = false
          this.$emit('meeting', meeting_at)

          Indicator.close()
          Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });

        }, (response) => {
          this.loading = false
          this.success = false
          this.error = true

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          throw new Error(`Error confirm meeting client order#${this.order_id}`)
        })
      }
    }
  }
</script>

<style scoped>

</style>
