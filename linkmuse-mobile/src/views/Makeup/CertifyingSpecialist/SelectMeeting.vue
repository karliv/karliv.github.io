<template>
  <div>
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
        <button class="lm-primary-button middle">Выбрать</button>
      </div>
    </div>
  </div>
</template>
<script>
  import { has } from '@utils'

  export default {
    metaInfo: {
      title: 'Выберите время проведения верификации'
    },
    props: {
      order_id: {
        type: Number,
        // required: true
      },
      meeting: {
        default: () => {
          return {
            '2019-01-24 11:22': 'Воткинск, республика Удмуртия, Россия',
            '2019-01-25 12:44': 'Воткинск, республика Удмуртия, Россия',
            '2019-01-26 22:11': 'Воткинск, республика Удмуртия, Россия',
            '2019-01-26 22:12': 'Воткинск, республика Удмуртия, Россия',
            '2019-01-27 22:11': 'Воткинск, республика Удмуртия, Россия',
            '2019-01-25 02:12': 'Воткинск, республика Удмуртия, Россия',
            '2019-01-25 22:11': 'Воткинск, республика Удмуртия, Россия',
            '2019-01-25 22:12': 'Воткинск, республика Удмуртия, Россия',
            '2019-01-25 12:12': 'Воткинск, республика Удмуртия, Россия'
          }
        },
        type: Object,
        // required: true
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

        this.loading = true
      },
    }
  }
</script>
