<template>
  <div>
    <router-link to="/risks-and-side-effects#warnings-and-precautions">Click here to go to 'risks-and-side-effects#warnings-and-precautions'</router-link>
    <div class='wrap'>
      <div :class='scrollableContentClasses' @scroll='setScrollPosition'>
        <TopHeader/>
        <div class='main-column'>
          <div id='content'>
            <router-view/>
          </div>
        </div>
        <BottomFooter/>
      </div>
    </div>
    <ISI/>
    <MobileLandscapeMessage/>
  </div>
</template>

<script>
  import BottomFooter from './components/BottomFooter'
  import TopHeader from './components/TopHeader'
  import MobileLandscapeMessage from './components/MobileLandscapeMessage'
  import ISI from './components/ISI'
  import { mapActions, mapGetters, mapState } from 'vuex'

  export default {
    beforeDestroy () {
      window.removeEventListener('resize', this.setWindowWidth)
      window.removeEventListener('resize', this.setWindowHeight)
    },
    components: { BottomFooter, ISI, MobileLandscapeMessage, TopHeader },
    computed: {
      ...mapState([ 'isiActive', 'isiSeen', 'navigationOpen', 'windowHeight' ]),
      ...mapGetters([ 'mobile' ]),
      scrollableContentClasses () {
        return {
          'scrollable-content': true,
          'lock-scroll': this.isiActive || this.navigationOpen
        }
      }
    },
    methods: {
      ...mapActions([ 'setWindowWidth', 'setWindowHeight', 'setScrollPosition' ])
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('resize', this.setWindowWidth)
        window.addEventListener('resize', this.setWindowHeight)

        this.setWindowWidth()
        this.setWindowHeight()
      })
    },
    name: 'App'
  }
</script>

<style lang='scss'>
  @import './scss/main';

  html {
    -webkit-text-size-adjust: 100%;
    font-size: 100%;
  }

  body {
    font-family: $open-sans;
    background: $colorBG;
  }

  .body-int-bg-wrap {
    position: relative;
    height: 1px;
    width: 100%;
  }

  .body-int-bg {
    width: 100%;
    height: 360px;
    position: absolute;
    z-index: -1;
    @include linear-gradient(to top, $colorBG, #f8f1fc, $fallback: $colorBG);
  }

  #content {
    width: 100%;
    float: left;
    position: relative;
    padding: 0;
    padding-bottom: 2.5em;
    overflow:hidden;
    @include media($small-desktop) {
      @include fill-parent;
      position: relative;
    }
  }

  .ie .scrollable-content {
    @include media($small-desktop) {
      width: 79.5%;
    }
  }

  .main-column {
    margin-top: 155px;
    overflow: auto;
    width: 100%;
    
    @include media($tablet-portrait){
      margin-top: 195px;
    }
    
    @include media($small-desktop) {
      margin-top: 0;
      overflow: visible;
      display: inline-block;
    }
  }

  .scrollable-content {
    @include media($small-desktop) {
      height: 100vh;
      width: 78.25%;
      display: block;
      overflow: hidden;
      overflow-y: scroll;
    }
    &.nav-open {
      overflow: hidden;
    }
  }

  .sub-menu-offset {
    display: none;
    height: 3vh;
  }

  .wrap {
    width: 100%;
    overflow: hidden;
    @include media($small-desktop) {
      overflow: visible;
    }
  }

  .wrap.padded {
    padding-top: 0;
    @include media($small-desktop) {
      padding-top: 269px;
    }
  }

  @include media($small-desktop) {
    ::-webkit-scrollbar {
        width:  .875rem;
        height: .5rem;
    }

    ::-webkit-scrollbar-thumb {
        background: darken($colorQuin,3);
        border-radius: 1em;
    }

    ::-webkit-scrollbar-track {
        background: $gray;
    }
  }
</style>