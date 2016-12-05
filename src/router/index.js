import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

import Home from '../pages/Home'
import AboutSelzentry from '../pages/AboutSelzentry'
import ClinicalData from '../pages/ClinicalData'
import DosingConsiderations from '../pages/DosingConsiderations'
import PatientAssistance from '../pages/PatientAssistance'
import Resources from '../pages/Resources'
import RisksSideEffects from '../pages/RisksSideEffects'
import ViralTropism from '../pages/ViralTropism'
import NotFound from '../pages/NotFound'

Vue.use(VueRouter)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior,
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { shortName: 'home' } },
    { path: '/about-selzentry', name: 'About SELZENTRY', component: AboutSelzentry, meta: { shortName: 'about' } },
    { path: '/clinical-data', name: 'Clinical Data', component: ClinicalData, meta: { shortName: 'clinical' } },
    { path: '/dosing-considerations', name: 'Dosing Considerations', component: DosingConsiderations, meta: { shortName: 'dosing' } },
    { path: '/patient-assistance', name: 'Patient Assistance', component: PatientAssistance, meta: { shortName: 'assistance' } },
    { path: '/resources', name: 'Resources', component: Resources, meta: { shortName: 'resources' } },
    { path: '/risks-and-side-effects', name: 'Risks and Side Effects', component: RisksSideEffects, meta: { shortName: 'risks' } },
    { path: '/viral-tropism', name: 'Viral Tropism', component: ViralTropism, meta: { shortName: 'viral' } },
    { path: '*', name: '404', component: NotFound, meta: { shortName: '404' } }
  ]
})

router.afterEach((to, from) => {
  store.state.isiActive ? store.commit('SET_ISI_CLOSED') : ''
  store.state.navigationOpen ? store.commit('SET_NAVIGATION_CLOSED') : ''
})

export default router
