<template>
  <lhButton @click="showMessage">点我</lhButton>
</template>

<script setup>
import Message from '@lh-vui/components/message'
const showMessage = () => {
  Message({
    message: 'hello world',
    type: 'success'
  })
}
</script>

<style lang="scss" scoped></style>
