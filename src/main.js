import { createApp } from 'vue'
import './style.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(router)

// // 前置守衛
// router.beforeEach((to,from,next)=>{
//   console.log("to",to) // 即將進入的路由信息
//   console.log("from",from) // 即將離開的路由信息
//   next()
// })

app.mount('#app')