<template>
  <div id='adverse-events' class='container'>
    <StudySwitcher :merit='true' :motivate='true' :pediatric='true'/>
    <br/>
    <transition name='fade' mode='out-in'>
      <component v-bind:is='currentStudy'></component>
    </transition>
  </div>
</template>

<script>
  import MeritAdverseEvents from './sections/merit/AdverseEvents'
  import MotivateAdverseEvents from './sections/motivate/AdverseEvents'
  import PediatricAdverseEvents from './sections/pediatric/AdverseEvents'
  import StudySwitcher from './StudySwitcher'
  import { mapState } from 'vuex'

  export default {
    components: {
      'merit': MeritAdverseEvents,
      'motivate': MotivateAdverseEvents,
      'pediatric': PediatricAdverseEvents,
      StudySwitcher
    },
    computed: {
      ...mapState([ 'currentStudy' ])
    },
    name: 'AdverseEvents'
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

  #adverse-events {
    @include linear-gradient(to top, $white 0%, $brand-light-gray 30%, $fallback: $brand-light-gray);
  }
</style>