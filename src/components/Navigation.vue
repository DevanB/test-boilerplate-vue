<script>
  import MenuButton from './MenuButton'
  import { mapActions, mapGetters, mapState } from 'vuex'
  import columnize from '../helpers/columnize'
  import links from '../links'

  export default {
    components: { MenuButton },
    computed: {
      ...mapGetters([ 'mobile' ]),
      ...mapState([ 'navigationOpen', 'openGroup' ])
    },
    data () {
      return {
        links
      }
    },
    methods: {
      ...mapActions([ 'setOpenGroup' ]),
      caretClasses (groupTitle) {
        return {
          fa: true,
          'fa-caret-right': true,
          'open': this.mobile && this.openGroup === groupTitle
        }
      }
    },
    name: 'Navigation',
    props: {
      columns: {
        type: Number,
        required: true
      }
    },
    render (h) {
      return (
        <span>
          <MenuButton />
          <div class='navigation' v-show={ this.navigationOpen }>
            <nav>
              {
                columnize(this.links, this.columns).map((linkGroup, index, links) => (
                  <div class='menu-column'>
                    {
                      linkGroup.map((group, index) => (
                        <div onClick={ this.setOpenGroup.bind(this, group.title) } class='grouping'>
                          <h3>
                            { this.mobile ? group.title : <router-link to={ group.url }>{ group.title }</router-link> }
                            <i v-show={ this.mobile } class={ this.caretClasses(group.title) }></i>
                          </h3>
                          <ul v-show={ !this.mobile || this.openGroup === group.title }>
                            {
                              group.children.map((childLink, index) => (
                                <li>
                                  <router-link to={ `${group.url}${childLink.url}` }>{ childLink.title }</router-link>
                                  <i class='fa fa-angle-right'></i>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      ))
                    }
                    {
                      links.length - 1 === index ? (
                        <div class='newLogo' v-show={ !this.mobile }>
                          <router-link to='/' title='Selzentry HCP'>
                            <img src='/static/images/logo-triumeq-hcp.png' alt='Selzentry HCP'/>
                          </router-link>
                        </div>
                        ) : ''
                      }
                  </div>
                ))
              }
            </nav>
          </div>
        </span>
      )
    }
  }
</script>

<style lang='scss' scoped>
  @import '../scss/main';

  .navigation {
    background: $colorBG;
    height: 100vh;
    left: 0;
    overflow-x: scroll;
    overflow-y: scroll;
    padding-top: 1em;
    position: fixed;
    top: 156px;
    width: 100vw;
    z-index: 10;
    
    @include transition(.1s all ease-in-out);

    nav {
      padding-bottom: 180px;
    }

    @include media($small-desktop) {
      
    }

    .menu-column {
      margin: 0 30px 0 30px;
      
      &:first-child {
        @include media($small-desktop) {
          @include shift(1 of 14);
        }
      }

      ul {
        display: block;
      }

      @include media($small-desktop) {
        margin: 0;
        margin-right: 2rem;
        @include span-columns(3.5 of 14, block-collapse);
      }
    }
    
    .menu-column:last-child {
      @include media($small-desktop) {
        margin-right: 0px;
      }
    }

    .grouping {
      margin-bottom: 20px;
    }

    .open {
      @include transform(rotate(90deg));
    }

    h3 {
      color: $colorTert;
      display: block;
      font-size: em(18);
      font-weight: 500;
      margin-bottom: 0;
      position: relative;
      text-transform: uppercase;

      a {
        color: $colorTert;
        display: block;
      }

      i {
        position: absolute;
        right: 0;
        top: 0;
      }

      @include media($small-desktop) {
        font-size: 1.3475rem;
      }
    }

    li {
      color: $colorQuin;
      font-size: 1.12375rem;
      padding: 0.79625rem 1rem 0.79625rem 0.79625rem;
      position: relative;
      @include media($small-desktop) {
        border-bottom: 1px dotted darken($gray, 10%);
        max-width: 90%;
      }

      a {
        font-size:84%;
      }

      i {
        color: $colorQuin;
        font-size: 2rem;
        float: right;
        margin-left: 5px;
        position: absolute;
        top: 50%;
        right: 0;
        @include transform(translateY(-50%));
        @include transition(0.25s all);
        @include media($small-desktop) {
          position: absolute;
          right: 0;
          top: 50%;
          @include transform(translateY(-50%));
        }
      }

      &:hover {
        i {
          @include transform(translateX(5px) translateY(-50%));
        }
      }
      
      &:last-child {
        border-bottom: 1px solid $colorBG;
        padding-bottom: 1rem;
      }
    }

    ul {
      padding: 0;
      margin: 0;
    }

    ul:last-child li:last-child {
      border-bottom: 0;
    }

    @include media($tablet-portrait) {
      top: 196px;
    }

    @include media($small-desktop) {
      top: 61px;
      width: 90%;

      nav {
        padding-bottom: inherit;
      }
    }
  }

  .newLogo {
    @include media($small-desktop) {
      height: auto;
      display: inline-block;
      overflow: hidden;
      img {
        width: 80%;
        height: auto;
      }
    }
  }
</style>