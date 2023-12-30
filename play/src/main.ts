/*
 * @Author: lh
 * @Date: 2023-12-11 08:35:51
 * @LastEditors: lh
 * @LastEditTime: 2023-12-13 10:28:25
 * @Description:
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import lhComponents from '../../packages/components'

const app = createApp(App)
app.use(lhComponents)
app.use(router)
app.mount('#app')
