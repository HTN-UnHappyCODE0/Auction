import { createRouter, createWebHashHistory } from "vue-router";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import auction from "./layouts/views/auction.vue";
import home from "./layouts/views/home.vue";
import artwork from "./layouts/views/artwork.vue";
import live from "./layouts/views/live.vue";
import ProductDetail from "./layouts/views/productDetail.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: home },
    { path: "/auction", component: auction },
    { path: "/artworks", component: artwork },
    { path: "/live", component: live },
    {
      name: "productDetail",
      path: "/artwork/:productName",
      component: ProductDetail,
    },
  ],
});

router.beforeEach((to, from, next) => {
  onMounted(() => {
    initFlowbite();
  });

  next();
});

export default router;