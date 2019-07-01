<template lang="html">
  <div id="app">
    <!-- <launch-detail :launch="selectedLaunch"></launch-detail> -->
    <router-view :launches="launches"></router-view>
  </div>

</template>

<script>

import {eventBus} from "./main.js";
// import LaunchDetail from "./LaunchDetail.vue"
export default {
  name: 'app',
  data() {
    return {
      launches: [],
      // selectedLaunch: [],
    }
  },
  mounted(){
  fetch('https://api.spacexdata.com/v3/launches')
  .then(res => res.json())
  .then(data => this.launches = data)
  // console.log(this.launches)
  // eventBus.$on('launch-selected', (launch) =>{
  //   this.selectedLaunch = launch
  //
  // })
}

// components : {
//   "launch-detail": LaunchDetail
}


</script>

<style>
body {
	background: rgba(0,0,0,0.8);
	margin: 0;
	color: #fff;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
