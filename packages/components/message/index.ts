import type { Plugin, App } from 'vue'
import Message from './src/message'

//只是为了兼容vue2
;(Message as Plugin).install = function (app: App) {
  app.config.globalProperties.$message = Message
}

export { Message }

export default Message
