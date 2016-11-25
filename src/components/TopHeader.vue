<template>
  <header>
    <div class='header-pad'>
      <UtilityLinks/>
      <div class='menu-home-button'>
        <router-link to='/'><img class='home-icon' src='../assets/home-button.svg' width='100%' alt='Home'></router-link>
      </div>
      <Navigation :columns='3'/>    
      <div class='logo content-mobile' id='mobileLogo'>
        <router-link to='/' title='Selzentry HCP'><img src='../assets/logo-triumeq-hcp.png' id='mobileImg' alt='Selzentry HCP'/></router-link>
      </div>
      <!--[if lte IE 9]> <div class='ie9down'> <![endif]-->
      <a href='http://selzentryhcp.com' class='triumeq-cta'>Learn about<br><strong>putting dolutegravir at<br />the core of therapy</strong></a>
      <!--[if lte IE 9]> </div> <![endif]-->
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
  }

  .header-pad {
    padding: 0 10px;
    @include media($small-desktop) {
      padding: 0 1.125em 0 1.4375em;
    }
  }

  .ie9down {
    .triumeq-cta {
      background: url('/images/bg-triumeq-cta.png') top left no-repeat;
      border-width: 0;
      box-shadow: none;
      top: -7em;
      
      &:after {
        border:0px solid white;
      }
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

  .triumeq-cta {
    background: none;
    border: none;
    box-shadow: none;
    color: black;
    cursor: pointer;
    display: none;
    filter: alpha(opacity=100);
    float: right;
    height: 5.2em;
    font-size: em(12);
    line-height: 1.125em;
    opacity: 1;
    padding-top: 0;
    position: relative;
    right: 1em;
    text-align: left;
    vertical-align: top;
    width: 140px;
    @include transition(all .25s ease-in-out);
    
    &:after {
      border-bottom: 2.475em solid transparent;
      border-left: 1em solid white;
      border-top: 2.475em solid transparent;
      content: ' ';
      display: none;
      height: 0;
      position: absolute;
      right: -.95em;
      top: 0;
      width: 0;
      
      @include media($small-desktop) {
        display: block;
      }
    }

    a {
      color: $colorDark;
    }

    strong {
      text-transform: uppercase;
    }

    @include media($small-desktop) {
      border-right: 0px solid;
      border-width: 1px;
      box-shadow: 0px 2px 2px 0px transparentize($colorDark, .8);
      background: url('/images/bg-triumeq-cta.png') top left no-repeat;
      padding-top: 0.5em;
      display: inline-block;
      font-size: 0.85em;
      right: 8.125%;
      text-align: center;
      width: 19em;
      @include border-image(linear-gradient(to bottom, $triumeq-start, $triumeq-end) 33% stretch);
      @include linear-gradient(to right, $colorBG, white, $fallback: white);
    }
  }
</style>
