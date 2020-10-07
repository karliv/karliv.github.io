<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle">
      <span>{{ model.text }}</span>
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul class="lm-radio-buttons ml_6" v-show="open" v-if="isFolder">
      <tree-item class="item" v-for="model in list" :model="model" :key="$parent.$index" :search="search">
        <div slot-scope="{ node }" class="node-info">

        </div>
      </tree-item>
    </ul>
  </li>
</template>

<script>
  import TreeItem from '@components/User/Profession/Tree/Item.vue'

  export default {
    components: { TreeItem },
    name: 'tree-item',
    props: {
      model: Object,
      search: String
    },
    data () {
      return {
        open: true
      }
    },
    computed: {
      list () {
        const exp = new RegExp(this.search, 'i')

        function deepFilter (children) {
          return children.filter((item) => {
            let c = item.children ? deepFilter(item.professions) : exp.test(item.text)

            return c.length ? false : c
          })
        }

        return deepFilter(this.model.professions)
      },
      isFolder () {
        return this.model.professions && this.model.professions.length
      }
    },
    methods: {
      toggle () {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    }
  }
</script>

<style scoped>

</style>
