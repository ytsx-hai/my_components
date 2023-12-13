import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import lhIcon from '../views/icon/index.vue'
import lhButton from '../views/button/index.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/button' },
  { path: '/icon', component: lhIcon },
  { path: '/button', component: lhButton }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
