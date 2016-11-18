import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import AboutSelzentry from '../pages/AboutSelzentry'
import ClinicalData from '../pages/ClinicalData'
import DosingConsiderations from '../pages/DosingConsiderations'
import PatientAssistance from '../pages/PatientAssistance'
import Resources from '../pages/Resources'
import RisksSideEffects from '../pages/RisksSideEffects'
import ViralTropism from '../pages/ViralTropism'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    }
  },
  routes: [
    { path: '/', component: Home },
    { path: '/about-selzentry', component: AboutSelzentry },
    { path: '/clinical-data', component: ClinicalData },
    { path: '/dosing-considerations', component: DosingConsiderations },
    { path: '/patient-assistance', component: PatientAssistance },
    { path: '/resources', component: Resources },
    { path: '/risks-and-side-effects', component: RisksSideEffects },
    { path: '/viral-tropism', component: ViralTropism },
    { path: '*', component: NotFound }
  ]
})

export default router
