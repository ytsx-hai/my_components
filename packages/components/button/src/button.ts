/*
 * @Author: lh
 * @Date: 2023-12-11 11:33:42
 * @LastEditors: lh
 * @LastEditTime: 2023-12-11 15:52:44
 * @Description:
 */
import { ExtractPropTypes } from 'vue'

export const buttonProps = {
  size: String,
  type: String,
  round: Boolean,
} as const

export type buttonProps = ExtractPropTypes<typeof buttonProps>
