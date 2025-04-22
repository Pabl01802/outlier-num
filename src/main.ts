import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify";

const app = createApp(App);

app.use(Vue3Toasity, {
  autoClose: 3000,
} as ToastContainerOptions);

app.use(router);
app.mount("#app");
