import { createApp } from 'vue'
import App from './App.vue'

import VueSessionStorage from "vue-sessionstorage"
createApp.use(VueSessionStorage);

import router from './router'

createApp(App).use(router).mount('#app')
