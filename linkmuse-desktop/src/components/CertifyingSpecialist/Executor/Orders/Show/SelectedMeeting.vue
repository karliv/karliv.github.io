<template>
  <div>
    <div class="ss-dispute-warning-head">
      <div class="left">Выберите время проведения верификации</div>
      <i class="icon-more" v-if="(refusedDispute === false)">
        <div class="actions-item">
          <ul>
            <li>
              <router-link :to="{ name: 'certifying.executor.orders.show.dispute', params: { order_id: order_id } }">Начать диспут</router-link>
            </li>
          </ul>
        </div>
      </i>
    </div>
    <div class="ss-dispute-warning-content">
      <div class="content-select-time">
        <div class="content-select-time--line" v-for="(date, index) in dates" :key="index">
          <span class="day">{{ index | moment('ddd') | uppercase }}, {{ index | moment('DD MMMM') }} </span>
          <div class="times lm-flex">
            <div v-for="datetime in date" :key="`${index}_${datetime}`">
              <tooltip class="menu-tooltip" effect="scale" placement="top" :content="meeting[datetime]">
                <span :class="[ {selected: (meeting_at === datetime) }, 'times-item border executor']" @click="setMeetingAt(datetime)">
                    {{ datetime | moment('HH:mm') }}
                </span>
              </tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loader v-if="loading" class="loader-button-meeting"></loader>
    <a href="javascript:void(0)" :class="['lm-primary-button', 'full', { 'disabled': (!meeting_at) }]" @click="confirmMeeting(meeting_at)" v-if="!loading">Выбрать</a>
  </div>
</template>

<script>
export default {
  props: {
    refusedDispute: {
      type: Boolean,
      default: false
    },
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
      meeting_at: null,
      loading: false,
      success: false,
      error: false
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
    },
    confirmMeeting (meeting_at) {
      if (!meeting_at) return

      this.loading = true

      this.$api.post(`/api/v2/certifying-specialists/orders/${this.order_id}/status/confirm_meeting_client`, { datetime: meeting_at }).then((response) => {
        this.loading = false
        this.success = true
        this.error = false
        this.$emit('meeting')
      }, (response) => {
        this.loading = false
        this.success = false
        this.error = true

        throw new Error(`Error confirm meeting client order#${this.order_id}`)
      })
    }
  }
}
</script>

<style lang="sass">
    .loader-button-meeting
        height: 64px
        display: flex
        align-items: center
        justify-content: center
        background: #fff
</style>
