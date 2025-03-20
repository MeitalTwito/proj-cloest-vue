import { createRouter, createWebHistory } from "vue-router";
import ItemList from "../views/ItemList.vue";
import ItemDetails from "../views/ItemDetails.vue";

const routes = [
  {
    path: "/",
    name: "ItemList",
    component: ItemList,
  },
  {
    path: "/item/:id",
    name: "ItemDetails",
    props: true,
    component: ItemDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
