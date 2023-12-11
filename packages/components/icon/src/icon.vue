<!--
 * @Author: lh
 * @Date: 2023-12-11 08:35:51
 * @LastEditors: lh
 * @LastEditTime: 2023-12-11 09:10:18
 * @Description: 
-->
<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import createNamespace from '@lh-vui/utils/create'
import { iconProps } from './icon'

defineOptions({
  name: 'LhIcon'
})
const bem = createNamespace('icon')
const props = defineProps(iconProps)
// 计算属性 来计算一个样式来处理
const style = computed(() => {
  if (!props.size && !props.color) return {}
  return {
    ...(props.size
      ? {
          'font-size':
            typeof props.size === 'number' ? props.size + 'px' : props.size
        }
      : {}),
    ...(props.color ? { color: props.color } : {})
  }
})
</script>
