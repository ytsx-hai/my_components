/*
 * @Author: lh
 * @Date: 2024-01-02 13:47:08
 * @LastEditors: lh
 * @LastEditTime: 2024-01-02 14:42:05
 * @Description:
 */
import type { Plugin, App } from 'vue'
import lhMessage from './src/message'
import '@lh-vui/theme-chalk/src/message.scss'

//只是为了兼容vue2
;(lhMessage as Plugin).install = function (app: App) {
  app.config.globalProperties.$message = lhMessage
}

export { lhMessage }

export default lhMessage
