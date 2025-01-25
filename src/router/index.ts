import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import RoomsView from "@/views/RoomsView.vue";
import TrafficView from "@/views/TrafficView.vue";
import LoginView from "@/views/LoginView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kontakt",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/pokoje",
      name: "rooms",
      component: RoomsView,
    },
    {
      path: "/cennik",
      name: "traffic",
      component: TrafficView,
    },
    {
      path: "/logowanie",
      name: "login",
      component: LoginView,
    },
    {
      path: "/o-nas",
      name: "about",
      component: AboutView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
