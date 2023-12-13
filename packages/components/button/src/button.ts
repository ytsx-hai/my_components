/*
 * @Author: lh
 * @Date: 2023-12-11 11:33:42
 * @LastEditors: lh
 * @LastEditTime: 2023-12-13 10:53:25
 * @Description:
 */
import { ExtractPropTypes, PropType } from 'vue'

export const buttonProps = {
  size: String as PropType<'large' | 'small'>,
  type: String as PropType<'primary' | 'success' | 'info' | 'warning' | 'danger'>,
  round: Boolean,
  plain: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: String as PropType<'button' | 'submit' | 'reset'>
} as const

export type buttonProps = ExtractPropTypes<typeof buttonProps>
