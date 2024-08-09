import './assets/main.css'

import { createApp } from 'vue' // Vue的方法
import App from './App.vue' // Vue的根元件
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
