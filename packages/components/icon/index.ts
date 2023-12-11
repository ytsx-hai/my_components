/*
 * @Author: lh
 * @Date: 2023-12-11 08:35:51
 * @LastEditors: lh
 * @LastEditTime: 2023-12-11 11:29:13
 * @Description:
 */
//整合组件
import _lhIcon from './src/icon.vue'
import '@lh-vui/theme-chalk/src/icon.scss'
import { withInstall } from '@lh-vui/utils/with-install'

const lhIcon = withInstall(_lhIcon)

export default lhIcon

// 导出类型
export * from './src/icon'

//给volar插件提示类型用的
declare module 'vue' {
  export interface GlobalComponents {
    lhIcon: typeof lhIcon
  }
}
