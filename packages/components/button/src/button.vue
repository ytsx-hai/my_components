<!--
 * @Author: lh
 * @Date: 2023-12-11 11:33:29
 * @LastEditors: lh
 * @LastEditTime: 2023-12-11 16:57:23
 * @Description: 
-->
<template>
  <button
    :class="[
      bem.b(),
      modifierType ? bem.m(modifierType) : '',
      isRound ? bem.is('round', true) : '',
      modifierSize ? bem.m(modifierSize) : ''
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import createNamespace from '@lh-vui/utils/create'
import { buttonProps } from './button'
import { computed } from 'vue'

const typeEnum = ['primary', 'success', 'info', 'warning', 'danger']
const sizeEnum = ['large', 'small']
const bem = createNamespace('button')
const props = defineProps(buttonProps)

// button size
const modifierSize = computed(() => {
  let size = ''
  if (!props.size) {
    return size
  }
  for (let i = 0; i < sizeEnum.length; i++) {
    if (props.size === sizeEnum[i]) {
      size = sizeEnum[i]
    }
  }
  return size
})

// button type
const modifierType = computed(() => {
  let type = 'default'
  if (!props.type) {
    return type
  }
  for (let i = 0; i < typeEnum.length; i++) {
    if (props.type === typeEnum[i]) {
      type = typeEnum[i]
    }
  }
  return type
})

// button is round
const isRound = computed(() => props.round)
console.log(props)
defineOptions({
  name: 'LhButton'
})
</script>
