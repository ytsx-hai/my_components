/*
 * @Author: lh
 * @Date: 2024-01-02 13:47:08
 * @LastEditors: lh
 * @LastEditTime: 2024-01-02 13:50:23
 * @Description:
 */
type typeEnum = 'success' | 'info' | 'warning' | 'danger'
export interface IMessageOptions {
  id?: number
  message?: string
  duration?: number
  type?: typeEnum
  num: number
}

export type IMessage = IMessageOptions | string
