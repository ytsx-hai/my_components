<template>
  <div>1、通过改变type属性值</div>
  <lh-text>default</lh-text>
  <lh-text type="primary">primary</lh-text>
  <lh-text type="success">success</lh-text>
  <lh-text type="danger">danger</lh-text>
  <lh-text type="info">info</lh-text>
  <lh-text type="warning">warning</lh-text>
  <div>2、通过改变size属性值: large, small</div>
  <lh-text type="primary" size="large">primary</lh-text>
  <lh-text type="primary">primary</lh-text>
  <lh-text type="primary" size="small">primary</lh-text>
  <div>3、自定义渲染标签，默认是span</div>
  <lh-text type="success" tag="i">success</lh-text>
  <lh-text type="success" tag="strong">success</lh-text>
  <lh-text type="success" tag="del">success</lh-text>
  <lh-text type="success" tag="div">success</lh-text>
  <div>4、自定义class类去覆盖原有颜色</div>
  <lh-text class="color-red" style="font-size: 20px">default</lh-text>
</template>

<script lang="ts" setup>
import lhText from '@lh-vui/components/text'
</script>

<style lang="scss" scoped>
.lh-text {
  padding-left: 24px;
}
.color-red {
  color: red;
}
</style>
