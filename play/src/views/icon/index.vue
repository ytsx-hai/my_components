<template>
  <!-- icon组件使用示例 -->
  <div>
    <lh-icon :size="20">
      <AccessibilitySharp />
    </lh-icon>
    <lh-icon :size="20" color="yellow">
      <AccessibilitySharp />
    </lh-icon>
  </div>
</template>

<script setup lang="ts">
import lhIcon from '@lh-vui/components/icon'
import { AccessibilitySharp } from '@vicons/ionicons5'
</script>

<style lang="scss" scoped></style>
