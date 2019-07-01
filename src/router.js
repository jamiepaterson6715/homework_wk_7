import Vue from "vue";
import Router from "vue-router";
import Launches from "@/views/LaunchesList";


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "",
      name: "launches",
      component: Launches
    }
  ]
})

export default router;
