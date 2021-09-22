import Vue from "vue";
import Router from "vue-router";

import Portada from "./components/Portada.vue";
import SobreMi from "./components/SobreMi.vue";
import Contacto from "./components/Contacto.vue";
import NotFound from "./components/NotFound.vue";
import Post from "./components/Post.vue";
import Articulo from "./components/Articulo.vue";
import Administrador from "./components/Administrador.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
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
    {
      path: "/post",
      component: Post,
      name: "Post",
      children: [
        {
          path: ":Articulo",
          component: Articulo,
          name: "Articulo",
        },
      ],
    },
    {
      path: "*",
      component: NotFound,
      name: "NotFound",
    },
    {
      path: "/administrador",
      component: Administrador,
      name: "Administrador",
    },
  ],
});
