import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lhIcon from "@lh-vui/components/icon"
import '@lh-vui/theme-chalk/index.scss'

const app = createApp(App)
app.use(lhIcon);
app.mount('#app')
