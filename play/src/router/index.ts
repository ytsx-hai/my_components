import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import lhIcon from '../views/icon/index.vue'
import lhButton from '../views/button/index.vue'
import lhText from '../views/text/index.vue'
import lhMessage from '../views/message/index.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/button' },
  { path: '/icon', component: lhIcon },
  { path: '/button', component: lhButton },
  { path: '/text', component: lhText },
  { path: '/message', component: lhMessage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
