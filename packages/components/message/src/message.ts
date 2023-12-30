import { createVNode, render } from 'vue'
import type { Imessage } from './message.types'
import messageVue from './message.vue'
const Message = (options: Imessage) => {
  console.log(options, 'hello Message')
  if (typeof options === 'string') {
    options = {
      message: options,
      type: 'info'
    }
  }
  //根据选项渲染组件
  //利用createVnode(components) 创建虚拟节点，并通过render(vnode,container)挂载到页面
  const div = document.createElement('div')
  const messageVnode = createVNode(messageVue, options as any)
  render(messageVnode, div)
  document.body.appendChild(div.firstChild!)
}

export default Message
