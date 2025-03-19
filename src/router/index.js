import { createRouter, createWebHistory } from "vue-router";
import ItemList from "../views/ItemList.vue";

const routes = [
  {
    path: "/",
    name: "ItemList",
    component: ItemList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
