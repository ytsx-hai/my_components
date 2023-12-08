/*
 * @Author: lh
 * @Date: 2023-12-08 16:59:40
 * @LastEditors: lh
 * @LastEditTime: 2023-12-08 17:32:21
 * @Description:
 */
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "reset-css";
import "./style.css";
import routes from "./router";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
