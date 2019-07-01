<template lang="html">
  <div v-if="launch">
    <h3>{{launch.mission_name}}</h3>
      <p>Details: {{launch.details}}</p>
      <p>Flight Number: {{launch.flight_number}}</p>
      <p>Mission Success?: {{launch.launch_success}}</p>
    </div>


</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: "launch-detail",
  props: ["launch"]
}
</script>

<style lang="css" scoped>
</style>
