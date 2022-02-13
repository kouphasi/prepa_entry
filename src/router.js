import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/hello",
    name: "hello",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
