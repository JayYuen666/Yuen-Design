import { createApp } from "vue";
import '@unocss/reset/tailwind-compat.css'
import YuenUI from './entry'
import App from './App.vue'

createApp(App).use(YuenUI).mount('#app')
