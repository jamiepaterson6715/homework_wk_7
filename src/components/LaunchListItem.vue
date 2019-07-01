<template lang="html">
  <div>
    <li v-on:click="handleClick">{{launch.mission_name}}</li>

  </div>
</template>

<script>
import {eventBus} from "../main.js";
export default {
  name: "launch-item",
  props: ["launch"],
  methods: {
    handleClick () {
      eventBus.$emit('launch-selected', this.launch)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
