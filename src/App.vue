<template>
  <div id="app">
    <TopHeader/>
    <router-view/>
    <ISI :footer="false"/>
    {{ windowWidth }}
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
import ISI from './components/ISI'

export default {
  name: 'App',
  components: { TopHeader, ISI },
  data () {
    return {
      windowWidth: ''
    }
  },
  ready () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize (event) {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main';
</style>