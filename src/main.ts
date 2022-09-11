import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'

import './assets/main.css'

const app = createApp(App)

app.use(VueWechatTitle)
app.use(createPinia())
app.use(router)

app.mount('#app')
