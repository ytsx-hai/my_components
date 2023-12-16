//整合组件
import _lhText from './src/text.vue'
import '@lh-vui/theme-chalk/src/text.scss'
import { withInstall } from '@lh-vui/utils/with-install'

const lhText = withInstall(_lhText)

export default lhText

// 导出类型
export * from './src/text'

//给volar插件提示类型用的
declare module 'vue' {
  export interface GlobalComponents {
    lhText: typeof lhText
  }
}
