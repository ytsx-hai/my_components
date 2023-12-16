import { ExtractPropTypes, PropType } from 'vue'

export const textProps = {
  tag: String, //自定义元素标签
  type: String as PropType<
    'primary' | 'success' | 'info' | 'warning' | 'danger'
  >, // 文字主题颜色
  size: String as PropType<'large' | 'small'> // 文字显示大小
} as const

export type TextProps = ExtractPropTypes<typeof textProps>
