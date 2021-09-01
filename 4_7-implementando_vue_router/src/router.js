import Vue from "vue";
import Router from "vue-router";
import Portada from "./components/Portada.vue";
import SobreMi from "./components/SobreMi.vue";
import Contacto from "./components/Contacto.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/.",
      component: Portada,
      name: "Portada",
    },
    {
      path: "/sobremi",
      component: SobreMi,
      name: "SobreMi",
    },
    {
      path: "/contacto",
      component: Contacto,
      name: "Contacto",
    },
  ],
});
