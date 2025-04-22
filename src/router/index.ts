import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import OutlierPage from "../views/OutlierPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/outlier/:outlier",
    name: "Outlier",
    component: OutlierPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
