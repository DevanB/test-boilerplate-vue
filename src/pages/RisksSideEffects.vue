<template>
  <div>
    <AdverseEvents/>
    <LaboratoryAbnormalities/>
    <WarningsAndPrecautions/>
  </div>
</template>

<script>
  import AdverseEvents from '../components/AdverseEvents'
  import LaboratoryAbnormalities from '../components/LaboratoryAbnormalities'
  import WarningsAndPrecautions from '../components/WarningsAndPrecautions'

  export default {
    components: { AdverseEvents, LaboratoryAbnormalities, WarningsAndPrecautions },
    name: 'RisksSideEffects'
  }
</script>

<style lang='scss' scoped>
</style>