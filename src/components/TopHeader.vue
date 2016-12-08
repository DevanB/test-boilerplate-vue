<template>
  <header id='header' :class='headerClasses'>
    <div class='header-pad container'>
      <UtilityLinks/>
      <div class='menu-home-button' v-show='!navigationOpen'>
        <router-link to='/'><img class='home-icon' src='/static/images/home-button.svg' width='100%' alt='Home'></router-link>
      </div>
      <Navigation :columns='3'/>
      <div class='logo'>
        <router-link to='/' title='Selzentry HCP'><img src='/static/images/logo-selzentry.svg' id='mobileImg' alt='Selzentry HCP'/></router-link>
      </div>
    </div>
  </header>
</template>

<script>
  import Navigation from './Navigation'
  
  import UtilityLinks from './UtilityLinks'
  import { mapGetters, mapState } from 'vuex'

  export default {
    components: { Navigation, UtilityLinks },
    computed: {
      ...mapState([ 'navigationOpen' ]),
      ...mapGetters([ 'minimal' ]),
      headerClasses () {
        return {
          minimal: this.navigationOpen || this.minimal,
          'show-nav': this.navigationOpen
        }
      }
    },
    name: 'TopHeader'
  }
</script>

<style lang='scss' scoped>
  @import '../scss/main';

  header {
    padding: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    @include linear-gradient(to top, $brand-light-gray 0%, $white 20%, $white 21%, $fallback: $brand-light-gray);

    /*&:after {
      height: 100%;
      position: absolute;
      right: -1em;
      top: 0;
      width: 1em;
      z-index: 9;
      
      @include media($small-desktop) {
        background: none;
      }
    }*/

    @include media($small-desktop) {
      position: relative;
    }
  }

  .header-pad {
    height: 155px;

    @include media($tablet-portrait) {
      height: 195px;
    }
  }

  .logo {
    display: inline-block;
    filter: alpha(opacity=100);
    float: right;
    left: 50%;
    max-width: 11.5em;
    opacity: 1;
    position: absolute;
    top: 75%;
    vertical-align: top;
    width: 44%;
    z-index: 12;
    @include transform(translateX(-50%) translateY(-50%));
    
    img {
      max-width: 100%;
      height: auto;
    }

    @include media($tablet-portrait) {
      max-width: 15.5em;
      top: 73%;
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

  .menu-home-button {
    display: none;
  }

  .minimal {
    background: $white;
    box-shadow:0 0 3px 0 transparentize($colorDark,.5);
    position: fixed;
    top: 0;
    z-index: 9999;

    .logo {
      @include media($small-desktop) {
        display: none;
        filter: alpha(opacity=0);
        opacity: 0;
      }
    }

    .menu-home-button {
      @include media($small-desktop) {
        display: block;
        float: left;
        margin-left: -2rem;
        position: relative;
        width: 1.8em;
        z-index: 12;
        .home-icon {
          margin-left: 5.5em;
        }
      }
    }

    .menu-icon {
      float: left;
    }

    &:after {
      background: $light-gray;
      box-shadow: 3px 0 3px 0px transparentize($colorDark,.5);
    }

    &.show-nav {
      .logo {
        display: none;
        @include media($small-desktop) {
          display: inline-block;
        }
      }
      .navigation {
        padding-top: 20px;
        nav {
          overflow: scroll;
          padding-bottom: 160px;
        }
        @include media($small-desktop) {
          padding-top: 0;
          nav {
            overflow: inherit;
            padding-bottom: inherit;
          }
        }
      }
    }

    @include media($small-desktop) {
      background: $light-gray;
      height: 8.25em;
      width: inherit;
    }  
  }

  .show-nav {
    .logo {
      @include media($small-desktop) {
        display: inline-block;
        height: auto;
        position: relative;
        top: auto;
        width: 100%;
      }
    }

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

  .show-nav, .show-nav.minimal {
    left: 0;
    position: fixed;
    top: 0;
    z-index: 1000;

    .sub-menu {
      opacity: 0;
      visibility: hidden;
    }

    .logo {
      display: inline-block;
      opacity: 1;

      img {
        height: auto;
        width: 100%;
      }

      @include media($small-desktop) {
        display: none;
        position: absolute;
        top: 0;
      }
    }
  }
</style>
