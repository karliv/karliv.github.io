<template>
    <div class="lm-tabs">
        <ul :class="navClasses" role="tablist">
            <template v-for="(tab, index) in groupedTabs">
                <li role="presentation" :class="getTabClasses(tab)" :key="index">
                    <a role="tab" href="javascript:void(0)" @click.prevent="select(tabs.indexOf(tab))">
                        <span v-if="tab.htmlTitle" v-html="tab.title"></span>
                        <template v-else>{{tab.title}}</template>
                    </a>
                </li>
            </template>
        </ul>
    
        <div class="tab-content">
            <slot/>
        </div>
    </div>
</template>

<script>
import { Tabs } from 'uiv'

export default {
  mixins: [Tabs],
  computed: {
    navClasses () {
      return {
        'nav': true,
        'lm-tabs-header': true,
        'nav-justified': this.justified,
        'nav-tabs': !this.pills,
        'nav-pills': this.pills,
        'nav-stacked': this.stacked && this.pills
      }
    }
  },
  methods: {
    getTabClasses (tab, isSubTab = false) {
      return {
        'lm-tabs-header--item': true,
        'active': tab.active,
        'disabled': tab.disabled,
        'pull-right': tab.pullRight && !isSubTab
      }
    }
  }
}
</script>
