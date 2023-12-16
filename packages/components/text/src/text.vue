<template>
  <span
    v-if="!tag"
    :class="[bem.b(), type ? bem.m(type) : '', size ? bem.m(size) : '']"
    v-bind="$attrs"
  >
    <slot></slot>
  </span>
  <lhtext v-else><slot></slot></lhtext>
</template>

<script setup lang="ts">
import { h, computed, useSlots } from 'vue'
import { textProps } from './text'
import createNamespace from '@lh-vui/utils/create'
import { useModifierType } from '@lh-vui/utils/hooks/modifierType'
import { useModifierSize } from '@lh-vui/utils/hooks/modifierSize'

defineOptions({
  name: 'LhText'
})

const bem = createNamespace('text')
const props = defineProps(textProps)
const tag = computed(() => props.tag)
const type = useModifierType(props)
const size = useModifierSize(props)

const lhtext = () => {
  const slot = useSlots()
  if (tag.value) {
    return h(
      tag.value,
      {
        class: [
          bem.b(),
          type ? bem.m(type.value) : '',
          size ? bem.m(size.value) : ''
        ]
      },
      slot
    )
  }
}
</script>

<style lang="scss" scoped></style>
