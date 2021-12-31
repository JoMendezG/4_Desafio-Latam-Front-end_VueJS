import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/admin",
    name: "Administracion",
    component: () => import("../views/Administracion.vue"),
  },
  {
    path: "/opiniones",
    name: "Opiniones",
    component: () => import("../views/Opiniones.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
