import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/HomePage.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("./views/MenuView.vue"),
  },
  {
    path: "/location",
    name: "Location",
    component: () => import("./views/LocationView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;
