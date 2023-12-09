//整合组件
import _lhIcon from "./src/icon.vue"
import { withInstall } from "@lh-vui/utils/with-install"

const lhIcon = withInstall(_lhIcon);

export default lhIcon;

export * from "./src/icon"

//给volar插件提示类型用的
declare module 'vue' {
    export interface GlobalComponents {
        lhIcon: typeof lhIcon
    }
}