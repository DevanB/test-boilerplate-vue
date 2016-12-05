<template>
  <div>
    <button v-if='this.merit' @click='setCurrentStudy("merit")'>Merit</button>
    <button v-if='this.motivate' @click='setCurrentStudy("motivate")'>Motivate</button>
    <button v-if='this.pediatric' @click='setCurrentStudy("pediatric")'>Pediatric</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([ 'setCurrentStudy' ])
    },
    name: 'StudySwitcher',
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
      }
    }
  }
</script>

<style lang='scss' scoped>
</style>