import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: HomeView
    },
    {
      path: "/projects",
      name: "projects",
      component: HomeView
    },
    {
      path: "/contact",
      name: "contact",
      component: HomeView
    }
  ]
});

export default router;
