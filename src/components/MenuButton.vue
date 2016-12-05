<template>
  <div @click='this.toggleNavigation' :class='menuIconClasses'>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([ 'isiActive', 'navigationOpen' ]),
      menuIconClasses () {
        return {
          'menu-icon': true,
          active: this.navigationOpen
        }
      }
    },
    methods: {
      ...mapActions([ 'toggleNavigation' ])
    },
    name: 'MenuIcon'
  }
</script>

<style lang='scss' scoped>
  @import '../scss/main';

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    margin: .5em 0 0 20px;
    padding: .5em;
    position: relative;
    vertical-align: top;
    width: 3em;
    z-index: 12;

    &:before {
      color: $colorTert;
      content: 'MENU';
      font-size: 80%;
      font-weight: bold;
      left: 50%;
      padding-bottom: 0;
      position: absolute;
      top: 0;
      @include transform(translateY(-100%) translateX(-50%));
      
      @include media($small-desktop) {
        padding-bottom: .5em;
      }
    }
    
    span {
      background: $colorQuin;
      display: block;
      height: 0.25em;
      margin: 0 auto 0.4375em;
      opacity: 1;
      visibility: visibile;
      width: 100%;
      @include transition(0.25s all ease-in-out);
    }

    span:nth-child(2) {
      max-width: 2.3125em;
    }

    @include media($small-desktop) {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 2.375em;
      margin-top: 0;
      padding: 0;
      top: 7px;
      width: 2.6875em;
    }
  }

  .active {
    cursor: pointer;
    
    span:first-child {
      @include transform(translateY(11px) rotate(45deg));
    }
    
    span:last-child {
      @include transform(translateY(-11px) rotate(-45deg));
    }
    
    span:nth-child(2) {
      opacity: 0;
      visibility: hidden;
    }
    
    .navigation {
      opacity: 1;
      visibility: visible;
      @include transform(scale(1));
    }
    
    &:before {
      opacity: 1;
    }
    
    @include media($small-desktop) {
      left: 0;
      position: relative;
      top: 0;
    }
    }
</style>