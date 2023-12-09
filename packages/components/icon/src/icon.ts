//组件相关属性和类型
import { ExtractPropTypes, PropType } from "vue"

export const iconProps ={
    color: String,
    size: [String, Number] as PropType<string | number>
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>