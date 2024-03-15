import "flowbite";
import { createApp } from "vue";
import App from "./layouts/default/App.vue";
import "./index.css";
import router from "./router";

import "../node_modules/flowbite-vue/dist/index.css";
const app = createApp(App);
app.use(router);
app.mount("#app");
