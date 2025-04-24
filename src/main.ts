import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router/index"
import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify"
import { createPinia } from "pinia"

const pinia = createPinia()
const app = createApp(App)

app.use(Vue3Toasity, {
  autoClose: 3000,
  theme: "colored",
} as ToastContainerOptions)
app.use(pinia)
app.use(router)
app.mount("#app")
