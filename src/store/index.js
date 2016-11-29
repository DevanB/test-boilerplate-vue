import Vue from 'vue'
import Vuex from 'vuex'

// Magic numbers from breakpoints in _grid-settings.scss.
// Width + 1 = max width
const MOBILE_MAX_WIDTH = 784
const TABLET_PORTRAIT_MAX_WIDTH = 957
const SMALL_DESKTOP_MAX_WIDTH = 1265

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isiActive: false,
    isiSeen: false,
    windowWidth: 0,
    windowHeight: 0
  },
  actions: {
  },
  getters: {
    breakpoint: state => {
      const x = state.windowWidth
      let breakpoint
      switch (true) {
        case (x < MOBILE_MAX_WIDTH):
          breakpoint = 'mobile'
          break
        case (x < TABLET_PORTRAIT_MAX_WIDTH):
          breakpoint = 'table-portrait'
          break
        case (x < SMALL_DESKTOP_MAX_WIDTH):
          breakpoint = 'small-desktop'
          break
        default: // WIDESCREEN_DESKTOP_MIN_WIDTH
          breakpoint = 'widescreen-desktop'
          break
      }
      return breakpoint
    },
    mobile: state => {
      return state.windowWidth < MOBILE_MAX_WIDTH
    },
    mobileLandscape: (state, getters) => {
      return getters.mobile && state.windowWidth >= state.windowHeight
    }
  },
  mutations: {
    toggleIsiActive (state) {
      state.isiActive = !state.isiActive
    },
    toggleIsiSeen (state) {
      state.isiSeen = !state.isiSeen || state.isiSeen
    },
    setWindowWidth (state, n) {
      state.windowWidth = n
    },
    setWindowHeight (state, n) {
      state.windowHeight = n
    }
  }
})

export default store
