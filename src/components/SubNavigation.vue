<script>
  import { mapActions, mapGetters, mapState } from 'vuex'
  import { getChildLinks, links } from '../links'

  export default {
    computed: {
      ...mapGetters([ 'minimal', 'mobile' ]),
      ...mapState([ 'navigationOpen', 'route', 'scrollSection' ]),
      sectionClasses () {
        return {
          'page-section': true,
          'sub-menu': true,
          container: true,
          fixed: this.minimal
        }
      }
    },
    data () {
      return {
        links
      }
    },
    methods: {
      ...mapActions([ 'setScrollSection' ])
    },
    render (h) {
      const { name } = this.route
      const { shortName } = this.$route.meta
      if (shortName !== 'home' && shortName !== '404' && shortName !== 'about') {
        return (
          <section id={ `${shortName}-menu` } class={ this.sectionClasses }>
            <h1 v-show={ !this.mobile }>{ name }</h1>
            <div class='wrap-fixed-width'>
              <ul class='nav'>
                {
                  getChildLinks(name).map((link, index) => (
                    <li class={ this.scrollSection === index ? 'active' : '' }><a onClick={ () => this.setScrollSection(index) }>{ link.title }</a></li>
                  ))
                }
              </ul>
            </div>
            <div v-show={ this.mobile } class='select'>
              <select>
                {
                  getChildLinks(name).map((link, index) => (
                    <option value={ `${this.route.path}${link.url}` }>{ link.title }</option>
                  ))
                }
              </select>
            </div>
          </section>
        )
      }
      return
    },
    name: 'SubNavigation'
  }
</script>

<style lang='scss' scoped>
  @import '../scss/main';

  .sub-menu {
    /*background: $colorTert;
    margin-bottom: 0;
    opacity: 1;
    padding: 10px;
    padding: 1em 0;
    visibility: visible;
    width: 100%;
    @include transition(0.25s opacity);*/

    &.fixed {
      height: 4.25em;
      left: 0;
      margin: 0;
      padding: 0;
      position: fixed;
      top: 4em;
      width: 73em;
      z-index: 11;

      li {
        display: table-row;
        
        a {
          display: table-cell;
          letter-spacing: -.05em;
          padding-bottom: 0;
          top: 0;
          vertical-align: middle;

          &:before {
            bottom: 0;
            position: absolute;
            top: auto;
          }
        }
      }

      .wrap-fixed-width {
        @include media($small-desktop) {
          display: inline-block;
          width: 100%;
          padding-right: 7.25%;
        }
      }

      @include media($small-desktop) {
        @include span-columns(14 of 18);
      }
    }

    ul.nav {
      /*float: right;*/
      /*margin: 0;*/
      /*position: relative;*/

      @include media($small-desktop) {
        /*@include span-columns(9 of 12);*/
        /*@include shift(3 of 12);*/
      }
    }

    div.select:after {
      box-sizing: border-box;
      color: $colorSena;
      content: '\f107';
      font-family: FontAwesome;
      font-size: em(22);
      padding: 18px 8px;
      pointer-events: none;
      position: absolute;
      right: .667em;
      text-align: right;
      top: 50%;
      width: 10%;
      z-index: 1;
      @include transform(translateY(-50%));
    }

    a {
      color: $brand-secondary;
      font-weight: 100;
      position: relative;
      top: -1.375em;
      display: block;
      text-align: center;
      line-height: 1.5;
      @include transition(.22s all ease-in-out);

      &:before {
        background-color: $brand-secondary;
        box-sizing: content-box;
        content: ' ';
        height: .125em;
        left: 0;
        position: absolute;
        top: -.125em;
        width: 100%;
        @include transform(scale(0,0));
        @include transition(all .22s ease-in-out);
      }

      &:hover {
        color: $colorTert;
        font-weight: 600;
        letter-spacing: -.025em;

        &:before {
          @include transform(scale(1, 1));
        }
      }
      
      @include media($px1024) {
        font-size:.7em;
        padding: 0;
        top: -2.1em;
      }
      
      @include media($px1144) {
        font-size: .8em;
        top: -1.75em;
      }

      @include media($small-desktop) {
        font-size: .6em;
        padding: 0 .65em;
        text-align: center;
        top: -2.5em;
      }
      
      @include media($widescreen-desktop) {
        font-size: 1em;
        top: -1.375em;
      }
    }

    h1 {
      color: $brand-primary;
      font-size: 2em;
      font-weight: 100;
      
      /*
      float: left;
      font-family: $ag-book;
      height: auto;
      margin-bottom: 0;
      margin-top: 5px;
      padding-left: .5rem;
      padding-right: 10px;
      position: relative;
      top: -.5rem;
      @extend %h3;

      @include media($px1144) {
        font-size: 1.45em;
      }

      @include media($small-desktop) {
        float: none;
        font-size: 1.25em;
        height: .55em;
        margin-bottom: 1.5rem;
        margin-top: 0;
        padding-right: 0;
        position: relative;
        top: auto;
      }*/
    }

    li {
      display: inline-block;
      font-weight: 100;
      position: relative;
      text-align: center;
      top: 0;

      &.active a {
        color: $brand-navy;
        font-weight: bold;

        &:before {
          background-color: $brand-secondary;
          @include transform(scale(1,1));
        }
      }
      
      @include media($small-desktop) {
        @include span-columns(2.25 of 9);
      }
    }

    select {
      padding: 10px 35px 10px 10px;
      border: 1px solid $colorSena;
      background: $colorTert;
      float:right;
      color: $white;
      font-size: em(14);
      appearance: none;
      margin-right: 1em;
      position: absolute;
      right: 0;
      top: 50%;
      @include transform(translateY(-50%));
    }

    @include media($small-desktop) {
      /*background: none;
      margin-bottom: -4px;
      padding: 2em 0 1.5em;
      padding-bottom: 1em;
      padding-top: 1em;
      width: 84.55%;
      @include shift(1 of 14);
      @include span-columns(12 of 14);*/
    }
  }
</style>