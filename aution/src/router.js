import { createRouter, createWebHashHistory } from "vue-router";
import auction from "./layouts/views/auction.vue";
import home from "./layouts/views/home.vue";
import artwork from "./layouts/views/artwork.vue";
import live from "./layouts/views/live.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: home },
    { path: "/auction", component: auction },
    { path: "/artworks", component: artwork },
    { path: "/live", component: live },
  ],
});
export default router;
