<template>
  <div class='mobile-landscape-message'>
      <div class='mobile-landscape-message-image'></div>
    </div>
</template>

<style lang='scss' scoped>
  @import '../scss/main';

  @media only screen and (max-device-width: 768px) and (orientation: landscape) {
    .mobile-landscape-message, .mobile-landscape-message-image {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99999999999;
    }
    .mobile-landscape-message {
      @include linear-gradient(to top, #743a97, #d0118c);
    }
    .mobile-landscape-message-image {
      background-image: url('../assets/mobile-landscape-message.png');
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
</style>