<template>
  <Scrollspy v-bind:id='this.$route.path.replace("/", "")' :time='10000' :steps='10000'>
    <AdverseEvents/>
    <LaboratoryAbnormalities/>
    <WarningsAndPrecautions/>
  </Scrollspy>
</template>

<script>
  import AdverseEvents from '../components/AdverseEvents'
  import LaboratoryAbnormalities from '../components/LaboratoryAbnormalities'
  import Scrollspy from '../components/Scrollspy'
  import WarningsAndPrecautions from '../components/WarningsAndPrecautions'
  import { mapActions, mapState } from 'vuex'
  export default {
    components: { AdverseEvents, LaboratoryAbnormalities, Scrollspy, WarningsAndPrecautions },
    computed: {
      ...mapState([ 'scrollSection' ])
    },
    data () {
      return {
        scrollPos: 0
      }
    },
    methods: {
      ...mapActions([ 'setScrollSection' ])
    },
    name: 'RisksSideEffects'
  }
</script>