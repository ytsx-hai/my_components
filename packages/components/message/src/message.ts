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
import { getUuid } from '@lh-vui/utils/getUuid'

//类似element-plus多个相同消息合并
const cacheMsgList: any[] = []

const lhMessage = (options: IMessage) => {
  if (typeof options === 'string') {
    options = {
      id: getUuid(),
      message: options,
      type: 'info',
      num: 1,
      duration: 3000
    }
  }
  options.num = 1
  options.id = getUuid()
  options.duration = options.duration ? options.duration : 3000
  //相同的message只添加一个到body其他以messageNum形式提示
  cacheMsgList.forEach(item => {
    if (
      item.message === (options as { message: string }).message &&
      item.type === (options as { type: string }).type
    ) {
      item.num++
      ;(options as { num: number }).num++
    }
  })

  //根据选项渲染组件
  //利用createVNode(components) 创建虚拟节点，并通过render(VNode,container)挂载到页面
  const div = document.createElement('div')
  const messageVNode = createVNode(messageVue, options as any)
  render(messageVNode, div)
  document.body.appendChild(div.firstChild!)
  cacheMsgList.push(options)

  console.log(cacheMsgList, 'cacheMsgList')
  delElement(options)
}

//多久后删除某个Element
function delElement(options: IMessage): void {
  setTimeout(() => {
    const el = document.getElementById(options.id)
    console.log(el, 'el')
    if (!el) return
    el.parentElement?.removeChild(el)

    const message = (options as { message: string }).message
    const type = (options as { type: string }).type

    const index = cacheMsgList.findIndex(
      item => item.message === message && item.type === type
    )
    if (index !== -1) {
      cacheMsgList.splice(index, 1)
    }
  }, (options as { duration: number }).duration + 400) //动画持续的时间400ms，等动画执行完成
}

export default lhMessage
