<template>
  <header>
    <div class='header-pad'>
      <UtilityLinks/>
      <div class='menu-home-button'>
        <router-link to='/'><img class='home-icon' src='~assets/images/home-button.svg' width='100%' alt='Home'></router-link>
      </div>
      <Navigation :columns='3'/>
      <div class='logo content-mobile'>
        <router-link to='/' title='Selzentry HCP'><img src='~assets/images/logo-triumeq-hcp.png' id='mobileImg' alt='Selzentry HCP'/></router-link>
      </div>
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

<style lang='scss' scoped>
  @import '../scss/main';
  #header {
    background: $white;
    height: auto;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;

    &:after {
      background: $colorBG;
      height: 100%;
      position: absolute;
      right: -1em;
      top: 0;
      width: 1em;
      z-index: 9;
      
      @include media($small-desktop) {
        background: none;
      }
    }

    @include media($small-desktop) {
      background: none;
      position: relative;
    }
  }

  .header-pad {
    padding: 0 10px;
    @include media($small-desktop) {
      padding: 0 1.125em 0 1.4375em;
    }
  }

  .menu-home-button {
    display: none;
    float: left;
    margin-left: -1rem;
    width: 1.8em;
  }

  .logo {
    display: inline-block;
    filter: alpha(opacity=100);
    float: right;
    left: 50%;
    max-width: 15.5em;
    opacity: 1;
    position: absolute;
    top: 55%;
    vertical-align: top;
    width: 44%;
    z-index: 12;
    @include transform(translateX(-50%) translateY(-50%));
    @include transition(all .25s ease-in-out);
    
    img {
      max-width: 100%;
      height: auto;
    }

    @include media($small-desktop) {
      float: none;
      left: auto;
      margin-left: 0;
      margin-right: 0;
      position: static;
      width: 100%;
      @include transform(none);
    }
  }

  .show-nav {
    @include media($small-desktop) {
      .navigation {
        padding-top: 1% !important;
        padding-bottom: 60px;
        .grouping {
          h3 i {
            display: none;
          }
        }
      }
    }
  }
</style>
