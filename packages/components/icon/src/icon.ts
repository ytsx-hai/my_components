/*
 * @Author: lh
 * @Date: 2023-12-11 08:35:51
 * @LastEditors: lh
 * @LastEditTime: 2024-01-02 17:03:56
 * @Description:
 */
//组件相关属性和类型
import { ExtractPropTypes, PropType } from 'vue'

type typeEnum = 'success' | 'info' | 'warning' | 'danger'
export const iconProps = {
  color: String,
  size: [String, Number] as PropType<string | number>,
  type: String as PropType<typeEnum>
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
