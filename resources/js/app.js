require("./bootstrap");

import { createApp } from "vue";
import router from "./Router/index";
import store from "./Store/index";
import App from "./Components/App.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
