<script>
  import MenuButton from './MenuButton'
  import { mapGetters, mapState } from 'vuex'

  const columnize = (links, numberPerColumn) => (
    links.reduce((ar, it, i) => {
      const ix = Math.floor(i / numberPerColumn)
      if (!ar[ix]) {
        ar[ix] = []
      }
      ar[ix].push(it)
      return ar
    }, [])
  )
  export default {
    components: { MenuButton },
    computed: {
      ...mapGetters([ 'mobile' ]),
      ...mapState([ 'isiActive', 'navigationOpen' ])
    },
    data () {
      return {
        links: [
          {
            title: 'About Selzentry',
            url: 'about-selzentry',
            children: [{
              title: 'Mechanisms of Action',
              url: '#mechanisms-of-action'
            }]
          }, {
            title: 'Clinical Data',
            url: 'clinical-data',
            children: [{
              title: 'Study Design',
              url: '#motivate-study-design'
            }, {
              title: 'Demographics and Baseline Characteristics',
              url: '#motivate-demographics'
            }, {
              title: 'Virologic Response',
              url: '#motivate-virologic-response'
            }, {
              title: 'CD4+ T-Cell Count Results',
              url: '#motivate-cell-count-results'
            }, {
              title: 'Resistance',
              url: '#motivate-resistance'
            }]
          }, {
            title: 'Risks and Side Effects',
            url: 'risks-and-side-effects',
            children: [{
              title: 'Adverse Effects',
              url: '#motivate-adverse-effects'
            }, {
              title: 'Laboratory Abnormalities',
              url: '#motivate-laboratory-abnormalities'
            }, {
              title: 'Warnings and Precautions',
              url: '#warnings-and-precautions'
            }]
          }, {
            title: 'Viral Tropism',
            url: 'viral-tropism',
            children: [{
              title: 'CCR5 Prevalence',
              url: '#ccr5-prevalence'
            }, {
              title: 'Importance of Tropism Testing',
              url: '#importance-of-tropism-testing'
            }, {
              title: 'Available Highly Sensitive Tropism Tests',
              url: '#tropism-tests'
            }, {
              title: 'Tropism Access Program',
              url: '#tropism-access-program'
            }]
          }, {
            title: 'Dosing Considerations',
            url: 'dosing-considerations',
            children: [{
              title: 'How To Use Selzentry',
              url: '#how-to-use-selzentry'
            }, {
              title: 'Interactive Dosing Guide',
              url: '#interactive-dosing-guide'
            }, {
              title: 'Dosing Adjustments',
              url: '#dosing-adjustments'
            }, {
              title: 'Renal Impairment',
              url: '#renal-impairment'
            }]
          }, {
            title: 'Patient Assistance',
            url: 'patient-assistance',
            children: [{
              title: 'Patient Assistance Programs',
              url: '#patient-assistance-programs'
            }]
          }, {
            title: 'Resources',
            url: 'resources',
            children: [{
              title: 'HIV Resources',
              url: '#hiv-resources'
            }, {
              title: 'MOA Video',
              url: '#moa-video'
            }]
          }
        ]
      }
    },
    methods: {
      toggleNavigation () {
        this.$store.commit('TOGGLE_NAVIGATION')
        if (this.isiActive) {
          this.$store.commit('TOGGLE_ISI')
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
        <span on-click={this.toggleNavigation}>
          <MenuButton />
          <div class='navigation' v-show={ this.navigationOpen }>
            <nav>
              {
                columnize(this.links, this.columns).map((linkGroup, index, links) => (
                  <div class='menu-column'>
                    {
                      linkGroup.map((group, index) => (
                        <div class='grouping'>
                          <h3>
                            <router-link to={ group.url }>{ group.title }</router-link>
                            <i v-show={ this.mobile } class='fa fa-caret-right'></i>
                          </h3>
                          <ul>
                            {
                              group.children.map((childLink, index) => (
                                <li>
                                  <router-link to={ childLink.url }>{ childLink.title }</router-link>
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
                        <div class='newLogo'>
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
    margin-left: -6em;
    overflow-y: scroll;
    padding-top: 1em;
    padding-top: 20px;
    position: fixed;
    top: 8px;
    width: 100vw;
    z-index: 10;
    @include transform(scale(0.9));
    @include transition(.1s all ease-in-out);

    nav {
      padding-bottom: 160px;
    }

    @include media($small-desktop) {
      padding-top: 0;
      
      nav {
        padding-bottom: inherit;
      }
    }

    .menu-column {
      margin: 0 30px 0 30px;
      
      &:first-child {
        @include media($small-desktop) {
          @include shift(1 of 14);
        }
      }

      ul {
        display: none;
        @include media($small-desktop) {
          display: block;
        }
      }

      @include media($small-desktop) {
        margin: 0;
        margin-right: 2rem;
        @include span-columns(3.5 of 14, block-collapse);
      }
    }

    .menu-column:nth-child(3), .menu-column:nth-child(3) {
      ul {
        display: none;
        @include media($small-desktop) {
          display: block;
      
        }
      }
    }
    
    .menu-column:last-child {
      @include media($small-desktop) {
        margin-right: 0px;
      }
    }

    .grouping {
      margin-bottom: 20px;

      &.clicked {
        h3 i {
          @include transform(rotate(90deg));
          @include transition(all .2s ease-in-out);
        }

        ul {
          display: block;
        }
      }
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

    @include media($small-desktop) {
      padding-top: 2rem;
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