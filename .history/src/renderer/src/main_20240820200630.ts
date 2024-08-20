import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 状态管理
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
