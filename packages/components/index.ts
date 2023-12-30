/*
  用于整合所有组件，方便后期可以
  import plugins from "/packages/components"
  app.use(plugins)
  全局注册组件使用
**/

import { App } from 'vue'
import lhButton from './button'
import lhIcon from './icon'
import lhText from './text'

const plugins = [lhButton, lhIcon, lhText]

const install = (app: App) => {
  plugins.forEach(component => {
    app.use(component)
  })
}

export default {
  install
}
