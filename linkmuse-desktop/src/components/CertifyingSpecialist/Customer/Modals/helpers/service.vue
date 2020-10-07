<template>
  <div class="service-item">
    <div class="service-item-left">
      <div class="name">
        <span>{{ service.name | truncate(10) }}</span>

        <tooltip class="menu-tooltip" effect="scale" placement="top" :content="service.name">
          <i class="questions-icon"></i>
        </tooltip>
      </div>
      <div class="type">{{ formatedWorks(service.works) }}</div>
    </div>
    <div class="service-item-right">
      <span class="price" v-if="service.price">{{ service.price | currency('₽') }}</span>
      <span v-else>&nbsp;</span>
      <template v-if="(selected)">
        <a href="javascript:void(0)" @click="selectedService()" class="lm-primary-button small">Выбрать</a>
      </template>
    </div>
  </div>
</template>

<script>
import CertifyingSpecialist from '@modules/CertifyingSpecialist'

export default {
  props: {
    service: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    formatedWorks (works) {
      return Object.values(CertifyingSpecialist.getTransformServiceWorkType(works)).join(', ')
    },
    selectedService () {
      this.$emit('selected', this.service.id)
    }
  }
}
</script>
