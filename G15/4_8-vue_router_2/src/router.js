import Vue from "vue";
import Router from "vue-router";

// import Administrador from "./components/administrador.vue";
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      component: () => import("./components/inicio.vue"),
      name: "Portada",
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/inicio",
      redirect: "/",
    },
    {
      path: "/portada",
      redirect: "/",
    },
    {
      path: "/sobremi",
      component: () => import("./components/sobreMi.vue"),
      name: "SobreMi",
      alias: ["/acerca"],
    },
    {
      path: "/contacto",
      component: () => import("./components/contacto.vue"),
      name: "Contacto",
      alias: ["/contactame"],
    },
    {
      path: "/post",
      component: () => import("./components/post.vue"),
      name: "Post",
      children: [
        {
          path: ":Articulo",
          component: () => import("./components/articulo.vue"),
          name: "Articulo",
        },
      ],
    },
    {
      path: "/administrador/:tipo",
      component: () => import("./components/administrador.vue"),
    },
    {
      path: "*",
      component: () => import("./components/notFound.vue"),
      name: "NotFound",
    },
  ],
});
