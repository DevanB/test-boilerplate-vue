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
    currentStudy: 'motivate',
    headerHeight: 0,
    isiActive: false,
    isiSeen: false,
    navigationOpen: false,
    openGroup: '',
    scrollPosition: 0,
    scrollSection: 0,
    windowHeight: 649,
    windowWidth: 1920
  },
  actions: {
    setCurrentStudy ({ commit, state }, study) {
      state.currentStudy === study ? '' : commit('SET_CURRENT_STUDY', study)
    },
    setOpenGroup ({ commit, state }, groupTitle) {
      (state.openGroup === groupTitle) ? commit('SET_OPEN_NAVIGATION_GROUP', '') : commit('SET_OPEN_NAVIGATION_GROUP', groupTitle)
    },
    setScrollPosition ({ commit, state }) {
      const scrollableContentDiv = document.querySelector('.scrollable-content')
      const top = (scrollableContentDiv.pageYOffset || scrollableContentDiv.scrollTop) - (scrollableContentDiv.clientTop || 0)
      top === state.scrollPosition ? '' : commit('SET_SCROLL_POSITION', top)
    },
    setScrollSection ({ commit }, section) {
      commit('SET_SCROLL_SECTION', section)
    },
    setWindowWidth ({ commit, state }) {
      const windowWidth = document.documentElement.clientWidth
      windowWidth === state.windowWidth ? '' : commit('SET_WINDOW_WIDTH', windowWidth)
    },
    setWindowHeight ({ commit, state }) {
      const windowHeight = document.documentElement.clientHeight
      windowHeight === state.windowHeight ? '' : commit('SET_WINDOW_HEIGHT', windowHeight)
    },
    toggleIsi ({ commit, state, getters }) {
      if (getters.mobile) {
        if (state.navigationOpen) {
          commit('TOGGLE_NAVIGATION')
        }
        commit('TOGGLE_ISI')
        if (!state.isiSeen) commit('TOGGLE_ISI_SEEN')
        document.getElementById('sidebar').scrollTop = 0
      }
    },
    toggleNavigation ({ commit, state }) {
      commit('TOGGLE_NAVIGATION')
      if (state.isiActive) {
        commit('TOGGLE_ISI')
      }
    }
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
    SET_CURRENT_STUDY (state, n) {
      state.currentStudy = n
    },
    SET_ISI_CLOSED (state) {
      state.isiActive = false
    },
    SET_NAVIGATION_CLOSED (state) {
      state.navigationOpen = false
    },
    SET_OPEN_NAVIGATION_GROUP (state, n) {
      state.openGroup = n
    },
    SET_SCROLL_POSITION (state, n) {
      state.scrollPosition = n
    },
    SET_SCROLL_SECTION (state, n) {
      state.scrollSection = n
    },
    SET_WINDOW_WIDTH (state, n) {
      state.windowWidth = n
    },
    SET_WINDOW_HEIGHT (state, n) {
      state.windowHeight = n
    },
    TOGGLE_ISI (state) {
      state.isiActive = !state.isiActive
    },
    TOGGLE_ISI_SEEN (state) {
      state.isiSeen = !state.isiSeen || state.isiSeen
    },
    TOGGLE_NAVIGATION (state) {
      state.navigationOpen = !state.navigationOpen
    }
  }
})

export default store
