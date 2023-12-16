<!--
 * @Author: lh
 * @Date: 2023-12-11 11:33:29
 * @LastEditors: lh
 * @LastEditTime: 2023-12-13 11:22:37
 * @Description: 
-->
<template>
  <button
    :class="[
      bem.b(),
      type ? bem.m(type) : '',
      isRound ? bem.is('round', true) : '',
      isPlain ? bem.is('plain', true) : '',
      isCircle ? bem.is('circle', true) : '',
      isLoading ? bem.is('loading', true) : '',
      isDisabled ? bem.is('disabled', true) : '',
      size ? bem.m(size) : ''
    ]"
    :type="nativeType"
    v-bind="$attrs"
    @click="handleClick"
  >
    <span v-if="isLoading" :style="{ paddingLeft: '6px' }"><slot></slot></span>
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
import createNamespace from '@lh-vui/utils/create'
import { buttonProps } from './button'
import { computed } from 'vue'
import { useModifierType } from '@lh-vui/utils/hooks/modifierType'
import { useModifierSize } from '@lh-vui/utils/hooks/modifierSize'

defineOptions({
  name: 'LhButton'
})

const bem = createNamespace('button')
const props = defineProps(buttonProps)
const emits = defineEmits(['click'])

// button size
const size = useModifierSize(props)

// button type
const type = useModifierType(props)

// button is round
const isRound = computed(() => props.round)
// button is plain
const isPlain = computed(() => props.plain)
// button is circle
const isCircle = computed(() => props.circle)
// button is loading
const isLoading = computed(() => props.loading)
// button is disabled
const isDisabled = computed(() => props.disabled)
// overwrite the click event
const handleClick = () => {
  if (isLoading.value || isDisabled.value) {
    return
  }
  emits('click')
}
</script>
