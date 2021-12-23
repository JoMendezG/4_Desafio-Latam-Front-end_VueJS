import Vue from "vue";
import Router from "vue-router";
import Portada from "./components/inicio.vue";
import SobreMi from "./components/sobreMi.vue";
import Contacto from "./components/contacto.vue";
import Post from "./components/post.vue";
import Articulo from "./components/articulo.vue";
import NotFound from "./components/notFound.vue";
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
      name: Contacto,
    },
    {
      path: "/post",
      component: Post,
      name: "Post",
      children: [
        {
          path: ":Articulo",
          component: Articulo,
          name: Articulo,
        },
      ],
    },
    {
      path: "*",
      component: NotFound,
      name: "NotFound",
    },
  ],
});
