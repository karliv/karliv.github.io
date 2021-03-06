<template>
  <div class="rui-emoji">
    <ul class="emoji-controller" @click="changeActive" ref="controller" v-clickoutside="hide">
      <li v-for="(pannel, index) in pannels" :key="`titles_${index}`">{{ titles[index] }}</li>
    </ul>
    <ul class="emoji-container" ref='view' @click="selectItem">
      <li v-for="(emojiGroup, index) in emojis" :key="`group_${index}`">
        <a href="javascript:void(0)" v-for="emoji in emojiGroup" :key="`emoji_${emoji}`">
          <span class="emoji-item" :title="emoji" :class = '"sprite-" + getPureName(emoji)'></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import clickoutside from './../utils/clickoutside.js'
import RangeUtil from './../utils/rangeUtil.js'
import data from './../utils/emoji-data.js'

const toArray = arrayLike => [].slice.call(arrayLike)
const getEleIndex = (ele) => {
  if (!ele) return -1
  if (!ele.parentElement) return -1
  return toArray(ele.parentElement.children).indexOf(ele)
}

export default {
  props: {
    captions: {
      type: Array,
      default: () => ['Эмоции', 'Природа', 'Объекты', 'Места', 'Символы']
    },
    area: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      required: true
    }
  },
  directives: { clickoutside },
  data () {
    return {
      emojiData: data,
      pannels: ['People', 'Animals', 'Objects', 'Places', 'Symbols'],
      activeIndex: 0,
      selection: null
    }
  },
  computed: {
    emojis () {
      return this.pannels.map(item => {
        return Object.keys(this.emojiData[item])
      })
    },
    titles () {
      return this.captions || this.pannels
    }
  },
  watch: {
    activeIndex (index) {
      this.selectByIndex(index)
    }
  },
  destroyed () {
    this.$btn.removeEventListener('mousedown', this.saveSelection, false)
  },
  mounted () {
    this.$nextTick(() => {
      this.$area = document.getElementById(this.area)
      this.$btn = document.getElementById(this.btn)

      this.saveSelection()
      this.$btn.addEventListener('mousedown', this.saveSelection, false)
    })

    this.$controllers = toArray(this.$refs.controller.querySelectorAll('li'))
    this.$views = toArray(this.$refs.view.querySelectorAll('li'))
    this.$nextTick(() => {
      this.selectByIndex(0)
    })
  },
  methods: {
    hasFocus () {
      return document.activeElement === this.$area
    },
    saveSelection () {
      if (this.hasFocus()) {
        this.selection = RangeUtil.saveSelection()
      }
    },
    changeActive (e) {
      const tar = e.target
      if (tar.tagName.toLowerCase() === 'ul') return
      const index = getEleIndex(tar)
      if (index === this.activeIndex) return
      this.activeIndex = index
    },
    insertEmoji (text) {
      this.$nextTick(() => {
        this.$area.focus()
      })
      if (this.selection) {
        RangeUtil.restoreSelection(this.selection)
      }
      this.$nextTick(() => {
        try {
          RangeUtil.replaceSelection(text)
          this.$emit('insert:emoji', this.$area.innerText)
        } catch (e) {}
      })
    },
    getEmojiName (target) {
      const tag = this.getNormalTag(target)
      if (tag === 'ul' || tag === 'li') return ''
      let emojiTarget
      if (tag === 'a') {
        emojiTarget = target.querySelector('span')
      } else {
        emojiTarget = target
      }
      return emojiTarget.title
    },
    getNormalTag (tar) {
      return tar.tagName.toLowerCase()
    },
    getPureName (name) {
      return name.replace(/:/g, '')
    },
    selectItem (e) {
      let tar = e.target
      let tag = this.getNormalTag(tar)

      if (tag === 'ul') return
      if (tag === 'li') return

      let emojiNameCode = this.getEmojiName(tar)
      this.$emit('select', emojiNameCode)
      this.insertEmoji(emojiNameCode)
    },
    addClass (list, index) {
      list.forEach(item => {
        item.classList.remove('active')
      })
      list[index].classList.add('active')
    },
    selectByIndex (index) {
      this.addClass(this.$controllers, index)
      this.addClass(this.$views, index)
    },
    hide (e) {
      if (e.target === this.$btn) return
      this.$emit('hide', e)
    }
  }
}
</script>
<style lang="scss">
  @import url('./emoji-sprite.scss');
  .rui-emoji {
  width: 380px;
  height: 186px;
  position: absolute;
  bottom: 30px;
  background: #ffffff;
  z-index: 10;
  box-shadow: 0 1px 5px rgba(0,0,0,.3);
  ul {
    list-style: none;
  }
  ul, li {
    margin: 0;
    padding: 0;
  }
  .emoji-controller {
    height: 36px;
    overflow: hidden;
    margin-bottom: 0;
    li {
      float: left;
      width: 76px;
      font-size: 12px;
      line-height: 36px;
      cursor: pointer;
      text-align: center;
      position: relative;
      &.active::after{
        content: '';
        width: 100%;
        height: 1px;
        background: red;
        left: 0;
        bottom: 4px;
        position: absolute;
      }
    }
  }
  .emoji-container {
    height: 140px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    li {
      font-size: 0;
      display: none;
      padding: 5px;
      &.active {
        display: block;
      }
      a {
        float: left;
        overflow: hidden;
        height: 35px;
        transition: all ease-out .2s;
        border-radius: 4px;
        &:hover {
          background-color: #000000;
          border-color: #000000;
        }
        span {
          width: 25px;
          height: 25px;
          display: inline-block;
          border: 1px solid transparent;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
