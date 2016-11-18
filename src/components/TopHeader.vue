<template>
  <header>
    <div class="header-pad">
      <UtilityLinks/>
      <div class='menu-home-button'>
        <a href='/'><img class='home-icon' src='../assets/home-button.svg' width='100%' alt='Home'></a>
      </div>
      <div class="logo content-mobile" id="mobileLogo"><a href="/" title="Tivicay HCP"><img src="../assets/logo-triumeq-hcp.png" id="mobileImg"alt="Tivicay HCP" /></a></div>
      <!--[if lte IE 9]> <div class='ie9down'> <![endif]-->
      <a href="#" class="triumeq-cta">Learn about<br><strong>putting dolutegravir at<br />the core of therapy</strong></a>
      <!--[if lte IE 9]> </div> <![endif]-->
      <Navigation :columns="2"/>      
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation'
import UtilityLinks from './UtilityLinks'
export default {
  name: 'TopHeader',
  components: { Navigation, UtilityLinks }
}
</script>

<style lang="scss" scoped>
  @import '../scss/main';

  #header {
    padding: 0;
    background: $white;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: auto;

    &:after {
      height: 100%;
      width: 1em;
      background: $colorBG;
      position: absolute;
      right: -1em;
      top: 0;
      z-index: 9;
      @include media($small-desktop) {
        background: none;
      }
    }

    @include media($small-desktop) {
      background: none;
      position: relative;
    }
    .header-pad {
      padding: 0;
      @include media($small-desktop) {
        padding: 0 1.125em 0 1.4375em;
      }
    }
  }
</style>
