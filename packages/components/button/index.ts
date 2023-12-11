import _lhButton from './src/button.vue'
import '@lh-vui/theme-chalk/src/button.scss'
import { withInstall } from '@lh-vui/utils/with-install'

const lhButton = withInstall(_lhButton)

export default lhButton

// 导出类型
export * from './src/button'

declare module 'vue' {
  export interface GlobalComponents {
    lhButton: typeof lhButton
  }
}
