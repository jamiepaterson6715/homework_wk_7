<template lang="html">

<ul>
  <launch-item v-for="launch in launches" :launch="launch"></launch-item>
</ul>

</template>

<script>
import LaunchItem from '@/components/LaunchListItem.vue'
export default {
  name: "launches",
  props: [
    "launches"
  ],
  components: {
    "launch-item": LaunchItem
  }
}
</script>

<style lang="css" scoped>
</style>
