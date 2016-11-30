<template>
  <img v-show='mobileLandscape' src='~assets/images/mobile-landscape-message.png' class='mobile-landscape-message-image' alt='This website is best viewed in portrait mode on mobile devices. Please rotate your device.'/>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([ 'mobileLandscape' ]),
    name: 'MobileLanscapeMessage'
  }
</script>

<style lang='scss' scoped>
  @import '../scss/main';

  .mobile-landscape-message-image {
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 99999999999;
    @include linear-gradient(to top, #743a97, #d0118c);
  }
</style>