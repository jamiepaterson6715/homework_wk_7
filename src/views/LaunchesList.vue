<template lang="html">

<div>
  <launch-detail :launch="selectedLaunch"></launch-detail>
  <launch-list :launches="launches"></launch-list>
</div>

</template>

<script>
import {eventBus} from "@/main.js"
import LaunchDetail from "@/components/LaunchDetails.vue"
import LaunchList from '@/components/LaunchList.vue'

export default {
  name: 'launches',
  props: ['launches'],
  components: {
    "launch-list": LaunchList,
    "launch-detail": LaunchDetail
  },
  data () {
    return {
      selectedLaunch: []
    }
  },
  mounted (){
    eventBus.$on('launch-selected', (launch) =>
      this.selectedLaunch = launch)
  }
}
</script>

<style lang="css" scoped>
</style>
