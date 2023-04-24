import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// import ElementPlus from 'element-plus'
import store from './stores/index'
import 'normalize.css/normalize.css'
import './assets/css/reset.css'
//引入element-plus相关样式
// import 'element-plus/dist/index.css'

import './assets/main.css'

const app = createApp(App)
// app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')
