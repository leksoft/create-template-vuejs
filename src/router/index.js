import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Aboute from "../views/About";
import Serviecs from "../views/Services";
import Portfolio from "../views/Portfolio";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: Aboute,
  },
  {
    path: "/services",
    name: "Services",
    component: Serviecs,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
