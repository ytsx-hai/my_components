<!--
 * @Author: lh
 * @Date: 2024-01-02 13:47:08
 * @LastEditors: lh
 * @LastEditTime: 2024-01-02 17:47:19
 * @Description: 
-->
<template>
  <lhButton @click="showMessage1">info</lhButton>
  <lhButton @click="showMessage2">success</lhButton>
  <lhButton @click="showMessage3">warning</lhButton>
  <lhButton @click="showMessage4">danger</lhButton>
</template>

<script setup>
import lhMessage from '@lh-vui/components/message'
const showMessage1 = () => {
  lhMessage({
    message: 'hello info',
    type: 'info',
    duration: 12000
  })
}
const showMessage2 = () => {
  lhMessage({
    message: 'hello success',
    type: 'success',
    duration: 9000
  })
}
const showMessage3 = () => {
  lhMessage({
    message: 'hello warning',
    type: 'warning',
    duration: 6000
  })
}
const showMessage4 = () => {
  lhMessage({
    message: 'hello danger',
    type: 'danger',
    duration: 3000
  })
}
</script>

<style lang="scss" scoped></style>
