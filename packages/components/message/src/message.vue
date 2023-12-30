<template>
  <div style="color: red">{{ message }}</div>
</template>
<script lang="ts" setup>
defineProps({
  id: { type: Number, default: 0 },
  message: { type: String, default: '' },
  type: { type: String, default: 'info' }
})
</script>
