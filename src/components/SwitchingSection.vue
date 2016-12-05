<template>
  <div>
    <StudySwitcher :merit='this.merit' :motivate='this.motivate' :pediatric='this.pediatric'/>
    <transition name='fade' mode='out-in'>
      <component v-bind:is='currentStudy'></component>
    </transition>
  </div>
</template>

<script>
  import `Merit${this.name}` from `./sections/merit/${this.name}`
  import `Motivate${this.name}` from `./sections/motivate/${this.name}`
  import `Pediatric${this.name}` from `./sections/pediatric/${this.name}`
  import StudySwitcher from './StudySwitcher'
  import { mapState } from 'vuex'

  export default {
    components: {
      'merit': `Merit${this.name}`,
      'motivate': `Motivate${this.name}`,
      'pediatric': `Pediatric${this.name}`,
      StudySwitcher
    },
    computed: {
      ...mapState([ 'currentStudy' ])
    },
    name: `${this.name}`,
    props: {
      merit: {
        type: Boolean,
        required: false
      },
      motivate: {
        type: Boolean,
        required: false
      },
      pediatric: {
        type: Boolean,
        required: false
      },
      name: {
        type: String,
        required: true
      }
    }
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