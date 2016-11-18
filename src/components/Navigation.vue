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
        <button on-click={ this.toggleNavigation }>Menu</button>
        <div class="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="navigation" v-show={ this.showNavigation }>
          <nav>
            {
              columnize(this.links, this.columns).map((linkGroup, index) => (
                <div class="menuColumn">
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

<style lang="scss" scoped>
  @import '../scss/main';

  .navigation {
    width: 100%;
    overflow-y: scroll;
    padding-top: 1em;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    background: $colorBG;
    visibility: hidden;
    opacity: 0;
    @include transform(scale(0.9));
    @include transition(.1s all ease-in-out);
    @include media($small-desktop) {
      @include span-columns(14.6 of 18, block-collapse);
      padding-top: 14.4rem;
    }
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
    }
    .grouping.clicked {
      h3 i {
        @include transform(rotate(90deg));
        @include transition(all .2s ease-in-out);
      }
      ul {
        display: block;
      }
    }
    h3 {
      position: relative;
      display: block;
      color: $colorTert;
      font-weight: 500;
      font-size: em(18);
      text-transform: uppercase;
      margin-bottom: 0;
      @include media($small-desktop) {
        font-size:1.3475rem;
      }
      a {
        display: block;
        color: $colorTert;
      }
      i {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    ul {
      padding: 0;
      margin: 0;
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
          top: 50%;
          right: 0;
          @include transform(translateY(-50%));
        }
      }
      &:last-child {
        border-bottom: 1px solid $colorBG;
        padding-bottom: 1rem;
      }
      &:hover {
        i {
          @include transform(translateX(5px) translateY(-50%));
        }
      }
    }
    ul:last-child li:last-child {
      border-bottom: 0;
    }
  }
</style>