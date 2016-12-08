<template>
  <div><slot></slot></div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  // import store from '../store'
  export default {
    computed: {
      ...mapGetters([ 'mobile' ]),
      ...mapState([ 'scrollSection' ])
    },
    data () {
      return {
        eventEl: null,
        scrollEl: null,
        scrollSections: []
      }
    },
    methods: {
      _init (el) {
        const sections = el.$children
        this.eventEl = document.querySelector('.scrollable-content')
        this.scrollEl = document.querySelector('.scrollable-content')
        for (let i = 0; i < sections.length; i++) {
          if (sections[i].$el.offsetTop >= 0) {
            this.scrollSections.push(sections[i].$el.offsetTop)
          }
        }
      },
      _onScroll () {
        const pos = this.scrollEl.scrollTop
        let i = 0
        while (pos >= this.scrollSections[i]) {
          i++
        }
        // if (this.scrollSection !== (i ? i - 1 : 0)) {
        //   store.commit('SET_SCROLL_SECTION', i ? i - 1 : 0)
        // }
      },
      _scrollTo () {
        const current = this.scrollEl.scrollTop
        const target = this.scrollSections[this.scrollSection]
        const time = parseInt(this.time) || 200
        const steps = parseInt(this.steps) || 30
        const timems = parseInt(time / steps)
        const gap = target - current
        for (let i = 0; i <= steps; i++) {
          const pos = current + (gap / steps) * i
          setTimeout(function () {
            document.querySelector('.scrollable-content').scrollTop = pos
            timems * i
          })
        }
      }
    },
    name: 'Scrollspy',
    props: {
      time: {
        type: Number,
        required: false
      },
      steps: {
        type: Number,
        required: false
      }
    },
    watch: {
      scrollSection (newScrollSection) {
        this._scrollTo(newScrollSection)
      }
    },
    // Lifecycle hooks
    mounted () {
      this.$nextTick(() => {
        this._init(this)
        this.eventEl.addEventListener('scroll', this._onScroll)
      })
    },
    updated (el) {
      console.log('updated', el)
      // this._init(el)
    },
    beforeDestroy () {
      this.eventEl.removeEventListener('scroll', this._onScroll)
    }
  }
</script>