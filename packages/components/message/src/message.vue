<!--
 * @Author: lh
 * @Date: 2024-01-02 13:47:08
 * @LastEditors: lh
 * @LastEditTime: 2024-01-02 17:37:30
 * @Description: 
-->
<template>
  <div
    :class="[
      bem.b(),
      showFadeOut ? bem.e('fadeOut') : '',
      type ? bem.m(type) : ''
    ]"
  >
    <lhIcon size="20" v-if="type === 'info'" :type="type"
      ><AlertCircleSharp
    /></lhIcon>
    <lhIcon size="20" v-if="type === 'success'" :type="type"
      ><CheckmarkCircle
    /></lhIcon>
    <lhIcon size="20" v-if="type === 'danger'" :type="type"
      ><CloseCircleSharp
    /></lhIcon>
    <lhIcon size="20" v-if="type === 'warning'" :type="type"
      ><Warning
    /></lhIcon>
    <span :class="[bem.e('content')]">{{ message }}</span>
  </div>
</template>
<script lang="ts" setup>
import createNamespace from '@lh-vui/utils/create'
import { useModifierType } from '@lh-vui/utils/hooks/modifierType'
import lhIcon from '../../icon'
import {
  CheckmarkCircle,
  AlertCircleSharp,
  Warning,
  CloseCircleSharp
} from '@vicons/ionicons5'
import { ref } from 'vue'
const props = defineProps({
  id: { type: Number, default: 0 },
  message: { type: String, default: '' },
  type: { type: String, default: 'info' },
  duration: { type: Number, default: 3000 }
})

const bem = createNamespace('message')
// message type
const type = useModifierType(props)

//多久后弹窗消失
const showFadeOut = ref(false)
let timeOut: number
function messageDuration() {
  if (timeOut) {
    clearTimeout(timeOut)
  }
  timeOut = setTimeout(() => {
    showFadeOut.value = true
  }, props.duration)
}
messageDuration()
</script>
