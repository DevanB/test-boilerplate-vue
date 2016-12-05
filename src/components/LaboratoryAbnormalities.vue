<template>
  <div id="laboratory-abnormalities">
    <StudySwitcher :merit='true' :motivate='true' :pediatric='true'/>
    <br/>
    <transition name='fade' mode='out-in'>
      <component v-bind:is='currentStudy'></component>
    </transition>
  </div>
</template>

<script>
  import MeritLaboratoryAbnormalities from './sections/merit/LaboratoryAbnormalities'
  import MotivateLaboratoryAbnormalities from './sections/motivate/LaboratoryAbnormalities'
  import PediatricLaboratoryAbnormalities from './sections/pediatric/LaboratoryAbnormalities'
  import StudySwitcher from './StudySwitcher'
  import { mapState } from 'vuex'

  export default {
    components: {
      'merit': MeritLaboratoryAbnormalities,
      'motivate': MotivateLaboratoryAbnormalities,
      'pediatric': PediatricLaboratoryAbnormalities,
      StudySwitcher
    },
    computed: {
      ...mapState([ 'currentStudy' ])
    },
    name: 'LaboratoryAbnormalities'
  }
</script>

<style lang='scss' scoped>
  @import '../scss/main.scss';

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>