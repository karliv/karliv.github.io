<template>
  <no-ssr>
    <div>
      <div class="ss-dispute-warning-head">
        <div class="left">Введите утвержденное с клиентом время</div>
      </div>
      <div class="lm-calendar">
        <template v-if="!calendar.more">
          <div class="lm-calendar-head">
            <div class="prev icon-left-arrow" @click="subtractMonth()"></div>
            <div class="item" @click="subtractMonth()">
              <div class="month">{{ context | moment('subtract', '1 month', 'MMMM') | capitalize }}</div>
              <div class="year">{{ context | moment('subtract', '1 month', 'Y') }}</div>
            </div>
            <div class="item active">
              <div class="month">{{ context | moment('MMMM') | capitalize }}</div>
              <div class="year">{{ context | moment('Y') }}</div>
            </div>
            <div class="item" @click="addMonth()">
              <div class="month">{{ context | moment('add', '1 month', 'MMMM') | capitalize }}</div>
              <div class="year">{{ context | moment('add', '1 month', 'Y') }}</div>
            </div>
            <div class="next icon-right-arrow" @click="addMonth()"></div>
          </div>
          <div class="lm-calendar-content">
            <span class="cell day-header" v-for="day in weekdays" :key="`weekday_${day}`">{{ day | uppercase }}</span>

            <span v-for="day in firstDayOfMonth" :key="`prev_month_${day}`"
                  :class="[{
                                'disabled': (day < initialDate && month == initialMonth && year == initialYear)
                                }, 'prev-month', 'cell','day']"
                  @click="setDateInPrevMonth(day + daysInPrevMonth)">
                            {{ day + daysInPrevMonth }}
                        </span>

            <span v-for="day in daysInMonth" :key="`day_${day}`"
                  :class="[{
                                'disabled': (day < initialDate && month == initialMonth && year == initialYear),
                                'selected': false
                                }, 'cell','day']"
                  @click="setDate(day)">
                            {{ day }}
                        </span>

            <span v-for="day in ((weekdays.length - 1) - lastDayOfMonth)" :key="`next_month_${day}`"
                  :class="['next-month', 'cell','day']"
                  @click="setDateInNextMonth(day)">
                            {{ day }}
                        </span>
          </div>
        </template>
        <template v-if="calendar.more">
          <div class="lm-calendar-head days">
            <div class="prev icon-left-arrow" @click="subtracDay()"></div>
            <div class="day" @click="subtracDay(2)">
              <div class="count" v-if="calendar.fields.meeting_at[$moment(context).subtract(2, 'days').format('Y-MM-DD')]">
                {{ calendar.fields.meeting_at[$moment(context).subtract(2, 'days').format('Y-MM-DD')].length }}
              </div>
              <div class="month">{{ context | moment('subtract', '2 days', 'MMMM') }}</div>
              <div class="number">{{ context | moment('subtract', '2 days', 'DD') }}</div>
              <div class="day-week">{{ context | moment('subtract', '2 days', 'dd') }}</div>
            </div>
            <div class="day" @click="subtracDay(1)">
              <div class="count" v-if="calendar.fields.meeting_at[$moment(context).subtract(1, 'days').format('Y-MM-DD')]">
                {{ calendar.fields.meeting_at[$moment(context).subtract(1, 'days').format('Y-MM-DD')].length }}
              </div>
              <div class="month">{{ context | moment('subtract', '1 days', 'MMMM') }}</div>
              <div class="number">{{ context | moment('subtract', '1 days', 'DD') }}</div>
              <div class="day-week">{{ context | moment('subtract', '1 days', 'dd') }}</div>
            </div>
            <div class="day active">
              <div class="count" v-if="calendar.fields.meeting_at[date]">{{ calendar.fields.meeting_at[date].length }}</div>
              <div class="month">{{ context | moment('MMMM') | uppercase }}</div>
              <div class="number">{{ context | moment('DD') }}</div>
              <div class="day-week">{{ context | moment('dd') }}</div>
            </div>
            <div class="day" @click="addDay(1)">
              <div class="count" v-if="calendar.fields.meeting_at[$moment(context).add(1, 'days').format('Y-MM-DD')]">
                {{ calendar.fields.meeting_at[$moment(context).add(1, 'days').format('Y-MM-DD')].length }}
              </div>

              <div class="month">{{ context | moment('add', '1 days', 'MMMM') }}</div>
              <div class="number">{{ context | moment('add', '1 days', 'DD') }}</div>
              <div class="day-week">{{ context | moment('add', '1 days', 'dd') }}</div>
            </div>
            <div class="day" @click="addDay(2)">
              <div class="count" v-if="calendar.fields.meeting_at[$moment(context).add(2, 'days').format('Y-MM-DD')]">
                {{ calendar.fields.meeting_at[$moment(context).add(2, 'days').format('Y-MM-DD')].length }}
              </div>
              <div class="month">{{ context | moment('add', '2 days', 'MMMM') }}</div>
              <div class="number">{{ context | moment('add', '2 days', 'DD') }}</div>
              <div class="day-week">{{ context | moment('add', '2 days', 'dd') }}</div>
            </div>
            <div class="next icon-right-arrow" @click="addDay()"></div>
          </div>
          <div class="content-select-time">
            <div class="content-select-time--line">
              <span class="day">Введите время встречи</span>
              <div class="times lm-flex">
                <div v-for="time in calendar.fields.meeting_at[date]" :key="`${date}_${time.time}`">
                  <tooltip class="menu-tooltip" effect="scale" placement="top" :content="time.address">
                    <span class="times-item border">{{ time.time }}</span>
                  </tooltip>

                  <i class="remove-time" @click="removeOfferTime(time.time)"></i>
                </div>

                <div>
                  <input v-mask-time v-model="calendar.fields.time"
                         class="times-item border" placeholder="чч:мм"
                         v-validate="'required|date_format:HH:mm'"
                         key="time" name="time"
                         @keyup.enter="offerTime()"
                         :class="{ 'lm-input': true, error: (verrors.has('time')) }">
                </div>

              </div>
            </div>

            <div class="content-select-time--line" style="margin-top: 10px" v-show="calendar.fields.time">
              <span class="day">Введите адрес встречи <span class="required" style="color: #0062e1;">*</span></span>
              <textarea style="width: 100%; height: 100px;"
                        cols="30" rows="10" v-model="calendar.fields.address"
                        class="address-item border" placeholder="Адрес встречи"
                        v-validate="'required'"
                        key="address" name="address"
                        @keyup.enter="offerTime()"
                        :class="{ 'lm-input': true, error: (verrors.has('address')) }"></textarea>
              <div style="text-align: right;">
                <a href="javascript:void(0)"
                   :class="['lm-primary-button', { disabled: (!calendar.fields.time || !calendar.fields.address || verrors.has('time') || verrors.has('address')) }]"
                   @click="offerTime()"> Сохранить </a>
              </div>

            </div>

            <div class="content-select-time--line" v-if="(true === false)">
              <span class="day">Другие встречи в этот день</span>
              <div class="times">
                <div class="times-item">19:00</div>
                <a class="lm-user-block">
                  <img src="/dist/img/avatar_header.png" alt="" class="lm-user-block-avatar">
                  <div class="lm-user-block-info">
                    <div class="lm-user-block-info-name">Марат Сафин</div>
                    <div class="lm-user-block-info-type">Фото (5), Видео</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <loader v-if="calendar.loading" class="loader-button-meeting"></loader>
          <a href="javascript:void(0)" :class="['lm-primary-button', 'full', { disabled: Object.keys(calendar.fields.meeting_at).length === 0 }]" @click="makeAppointment()" v-if="!calendar.loading">ОТПРАВИТЬ</a>
        </template>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import { has } from '@utils'

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
    address: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      calendar: {
        more: false,
        loading: false,
        success: false,
        error: false,
        fields: {
          time: null,
          address: null,
          meeting_at: {}
        }
      },
      today: this.$moment(),
      context: this.$moment(),
      weekdays: this.$moment.weekdaysShort(true)
    }
  },
  computed: {
    year () {
      return this.context.format('Y')
    },
    month () {
      return this.context.format('MM')
    },
    date () {
      return this.context.format('Y-MM-DD')
    },
    daysInMonth () {
      return this.context.daysInMonth()
    },
    firstDayOfMonth () {
      return this.$moment(this.context).startOf('month').weekday()
    },
    lastDayOfMonth () {
      return this.$moment(this.context).endOf('month').weekday()
    },
    daysInPrevMonth () {
      return (this.$moment(this.context).subtract(1, 'month').daysInMonth() - this.firstDayOfMonth)
    },
    initialDate () {
      return this.today.get('date')
    },
    initialMonth () {
      return this.today.format('MM')
    },
    initialYear () {
      return this.today.format('Y')
    }
  },
  mounted () {
    this.calendar.fields.address = this.address
  },
  methods: {
    subtractMonth () {
      return new Promise((resolve, reject) => {
        if (this.$moment().isAfter(this.$moment(this.context).subtract(1, 'month'), 'month')) return false
        this.context = this.$moment(this.context).subtract(1, 'month')
        resolve(true)
      })
    },
    subtracDay (day = 1) {
      return new Promise((resolve, reject) => {
        if (this.$moment().isAfter(this.$moment(this.context).subtract(day, 'days'), 'days')) return false
        this.context = this.$moment(this.context).subtract(day, 'days')
        resolve(true)
      })
    },
    addMonth () {
      return new Promise((resolve, reject) => {
        this.context = this.$moment(this.context).add(1, 'month')
        resolve(true)
      })
    },
    addDay (day = 1) {
      return new Promise((resolve, reject) => {
        this.context = this.$moment(this.context).add(day, 'days')
        resolve(true)
      })
    },
    setDateInPrevMonth (date) {
      this.subtractMonth().then(() => {
        this.setDate(date)
      })
    },
    setDateInNextMonth (date) {
      this.addMonth().then(() => {
        this.setDate(date)
      })
    },
    setDate (date) {
      return new Promise((resolve, reject) => {
        if ((date < this.initialDate && this.month === this.initialMonth && this.year === this.initialYear)) return

        this.context.set('date', date)
        this.calendar.more = true
        resolve(true)
      })
    },
    removeOfferTime (time) {
      let date = this.context.format('Y-MM-DD')

      let index = this.calendar.fields.meeting_at[date].map(i => i.time).indexOf(time)

      if (index > -1) {
        this.$delete(this.calendar.fields.meeting_at[date], index)

        if (!this.calendar.fields.meeting_at[date].length) {
          this.$delete(this.calendar.fields.meeting_at, date)
        }
      }
    },
    offerTime () {
      this.setTime().then(({ date, time, address }) => {
        let meeting_at = this.calendar.fields.meeting_at

        let times = []

        if (has(meeting_at, date)) times = meeting_at[date]

        if (times.length) {
          let index = this.calendar.fields.meeting_at[date].map(i => i.time).indexOf(time)

          if (index < 0) {
            this.$set(this.calendar.fields.meeting_at, date, [...times, { time, address }])
          }
        } else this.$set(this.calendar.fields.meeting_at, date, [{ time, address }])

        this.calendar.fields.time = null
        this.calendar.fields.address = this.address

        this.$nextTick(() => {
          setTimeout(() => {
            this.$validator.reset()
          })
        })
      })
    },
    setTime () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then(result => {
          if (result) {
            let time = this.calendar.fields.time
            let address = this.calendar.fields.address

            time = time.split(':')
            this.context.set({ hours: time[0], minutes: time[1], second: '00' })

            resolve({ date: this.context.format('Y-MM-DD'), time: this.context.format('HH:mm'), address })
          }
        })
      })
    },
    makeAppointment () {
      let meeting = this.formattedMeetingAt(this.calendar.fields.meeting_at)

      if (!meeting.length) return false

      this.calendar.loading = true

      this.$api.post(`/api/v2/certifying-specialists/orders/${this.order_id}/status/confirm_meeting_specialist`, { meeting }).then((response) => {
        this.calendar.loading = false
        this.calendar.success = true
        this.calendar.error = false
        this.$emit('selected', meeting)
      }, (response) => {
        this.calendar.loading = false
        this.calendar.success = false
        this.calendar.error = true

        throw new Error(`Error make appointment order#${this.order_id}`)
      })
    },
    formattedMeetingAt (dates) {
      let result = []
      Object.keys(dates).forEach(date => dates[date].length && dates[date].forEach(item => result.push({ datetime: `${date} ${item.time}`, address: item.address })))
      return result
    }
  }
}
</script>

<style lang="sass">
  .loader-button-meeting
    height: 64px
    display: flex
    background: #fff
    align-items: center
    justify-content: center
  .address-item
    width: 400px
    margin-bottom: 8px
    display: inline-block
    vertical-align: middle

</style>
