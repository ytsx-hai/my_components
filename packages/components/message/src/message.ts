/*
 * @Author: lh
 * @Date: 2024-01-02 13:47:08
 * @LastEditors: lh
 * @LastEditTime: 2024-01-02 16:34:45
 * @Description:
 */
import { createVNode, render } from 'vue'
import type { IMessage } from './message.types'
import messageVue from './message.vue'
const lhMessage = (options: IMessage) => {
  console.log(options, 'hello Message')
  if (typeof options === 'string') {
    options = {
      message: options,
      type: 'info'
    }
  }
  //根据选项渲染组件
  //利用createVNode(components) 创建虚拟节点，并通过render(VNode,container)挂载到页面
  const div = document.createElement('div')
  const messageVNode = createVNode(messageVue, options as any)
  render(messageVNode, div)
  document.body.appendChild(div.firstChild!)
  delElement('lh-message', options.duration ? options.duration : 3000)
}

//多久后删除某个Element
let timeOut: number
function delElement(tag: string, duration: number): void {
  if (timeOut) {
    clearTimeout(timeOut)
  }
  timeOut = setTimeout(() => {
    const el = document.getElementsByClassName(tag)
    if (el.length === 0) return
    for (let i = 0; i < el.length; i++) {
      console.log(el[i].parentElement)
      el[i].parentElement?.removeChild(el[i])
    }
  }, duration + 400) //动画持续的时间400ms，等动画执行完成
}

export default lhMessage
