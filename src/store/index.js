import Vue from 'vue'
import Vuex from 'vuex'

// Magic numbers from breakpoints in _grid-settings.scss.
// Width + 1 = max width
const MOBILE_MAX_WIDTH = 767
const TABLET_PORTRAIT_MAX_WIDTH = 956
const SMALL_DESKTOP_MAX_WIDTH = 1264

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    headerHeight: 0,
    isiActive: false,
    isiSeen: false,
    navigationOpen: false,
    scrollPosition: 0,
    windowHeight: 0,
    windowWidth: 0
  },
  actions: {
  },
  getters: {
    breakpoint: state => {
      const x = state.windowWidth
      let breakpoint
      switch (true) {
        case (x <= MOBILE_MAX_WIDTH):
          breakpoint = 'mobile'
          break
        case (x <= TABLET_PORTRAIT_MAX_WIDTH):
          breakpoint = 'tablet-portrait'
          break
        case (x <= SMALL_DESKTOP_MAX_WIDTH):
          breakpoint = 'small-desktop'
          break
        default:
          breakpoint = 'widescreen-desktop'
          break
      }
      return breakpoint
    },
    minimal: state => {
      return state.scrollPosition >= 22
    },
    mobile: state => {
      return state.windowWidth < TABLET_PORTRAIT_MAX_WIDTH
    },
    mobileLandscape: (state, getters) => {
      return getters.mobile && state.windowWidth >= state.windowHeight
    }
  },
  mutations: {
    TOGGLE_ISI (state) {
      state.isiActive = !state.isiActive
    },
    toggleIsiSeen (state) {
      state.isiSeen = !state.isiSeen || state.isiSeen
    },
    TOGGLE_NAVIGATION (state) {
      state.navigationOpen = !state.navigationOpen
    },
    SET_SCROLL_POSITION (state, n) {
      state.scrollPosition = n
    },
    setWindowWidth (state, n) {
      state.windowWidth = n
    },
    setWindowHeight (state, n) {
      state.windowHeight = n
    },
    setHeaderHeight (state, n) {
      state.headerHeight = n
    }
  }
})

export default store
