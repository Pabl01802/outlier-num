import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router/index"
import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify"
import { createPinia } from "pinia"
import { createI18n } from "vue-i18n"
import en from "./locales/en.json"
import pl from "./locales/pl.json"

export type MessageSchema = typeof en

type Locale = "en" | "pl"

const pinia = createPinia()
const i18n = createI18n<[MessageSchema], Locale>({
  locale: localStorage.getItem("language") || "pl",
  globalInjection: true,
  fallbackLocale: "en",
  messages: {
    en,
    pl,
  },
})

const app = createApp(App)

app.use(Vue3Toasity, {
  autoClose: 3000,
  theme: "colored",
} as ToastContainerOptions)
app.use(pinia)
app.use(i18n)
app.use(router)
app.mount("#app")
