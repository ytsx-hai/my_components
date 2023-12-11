/*
 * @Author: lh
 * @Date: 2023-12-11 08:35:51
 * @LastEditors: lh
 * @LastEditTime: 2023-12-11 11:26:40
 * @Description:
 */
import { Plugin, App, Component } from 'vue'

// 如果组件想全局组件，必须加上install方法
export type SFCWithinstall<T> = T & Plugin
export function withInstall<T>(com: T) {
  // eslint-disable-next-line no-extra-semi
  ;(com as SFCWithinstall<T>).install = function (app: App) {
    const { name } = com as { name: string }
    app.component(name, com as Component)
  }
  return com as SFCWithinstall<T>
}
