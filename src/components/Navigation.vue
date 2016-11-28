<script>
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
    name: 'Navigation',
    props: {
      columns: {
        type: Number,
        required: true
      }
    },
    methods: {
      toggleNavigation () {
        this.showNavigation = !this.showNavigation
      }
    },
    render (h) {
      return (
        <div>
          <div on-click={ this.toggleNavigation } class='menu-icon'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class='navigation' v-show={ this.showNavigation }>
            <nav>
              {
                columnize(this.links, this.columns).map((linkGroup, index, links) => (
                  <div class='menuColumn'>
                    {
                      linkGroup.map((group, index) => (
                        <div class='group'>
                          <router-link to={ group.url }><h3>{ group.title }</h3></router-link>
                          {
                            group.children.map((childLink, index) => (
                              <router-link to={ childLink.url }><li>{ childLink.title }</li></router-link>
                            ))
                          }
                        </div>
                      ))
                    }
                    {
                      links.length - 1 === index ? (
                        <div class='newLogo'>
                          <router-link to='/' title='Selzentry HCP'>
                            <img src='../assets/images/logo-triumeq-hcp.png' alt='Selzentry HCP'/>
                          </router-link>
                        </div>
                        ) : ''
                      }
                  </div>

                ))
              }
            </nav>
          </div>
        </div>
      )
    },
    data () {
      return {
        showNavigation: false,
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
    }
  }
</script>

<style lang='scss' scoped>
  @import '../scss/main';
  
  .menu-icon {
    cursor: pointer;
    display: inline-block;
    margin: .5em 0 1em 20px;
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

  .navigation {
    background: $colorBG;
    height: 100%;
    left: 0;
    opacity: 0;
    overflow-y: scroll;
    padding-top:1em;
    position: fixed;
    top: 0;
    visibility: hidden;
    width: 100%;
    z-index: 10;
    @include transform(scale(0.9));
    @include transition(.1s all ease-in-out);

    .menu-column {
      margin: 0 30px 0 30px;
      @include media($small-desktop) {
        margin: 0;
        margin-right: 2rem;
        @include span-columns(3.5 of 14, block-collapse);
      }

      &:first-child {
        @include media($small-desktop) {
          @include shift(2 of 14);
        }
      }

      ul {
        display: none;
        @include media($small-desktop) {
          display: block;
        }
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
        color: $colorQuin;
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
      padding-top: 14.4rem;
      @include span-columns(14.6 of 18, block-collapse);
    }
  }

  .newLogo {
    display: none;
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