<!--
 * @Author: lh
 * @Date: 2023-12-11 08:35:51
 * @LastEditors: lh
 * @LastEditTime: 2023-12-11 16:34:12
 * @Description: 
-->
<script setup lang="ts">
import lhIcon from '@lh-vui/components/icon'
import { AccessibilitySharp } from '@vicons/ionicons5'
import lhButton from '@lh-vui/components/button'
// console.log(lhIcon)
</script>

<template>
  <!-- 图标示例 -->
  <div>
    <lh-icon :size="20">
      <AccessibilitySharp />
    </lh-icon>
    <lh-icon :size="20" color="yellow">
      <AccessibilitySharp />
    </lh-icon>
  </div>
  <br />
  <!-- button示例 -->
  <div>
    <h4>
      通过type属性修改，可取值"primary"、"danger"、"success"、"warning"、"info"
    </h4>
    <div>
      <lhButton>default</lhButton>
      <lhButton type="primary">primary</lhButton>
      <lhButton type="danger">danger</lhButton>
      <lhButton type="success">success</lhButton>
      <lhButton type="warning">warning</lhButton>
      <lhButton type="info">info</lhButton>
    </div>
    <h4>通过round属性修改，可取值true,false,</h4>
    <div>
      <lhButton round>default</lhButton>
      <lhButton type="primary" round>确定</lhButton>
      <lhButton type="danger" round>发送</lhButton>
      <lhButton type="success" round>提交表单</lhButton>
      <lhButton type="warning" round>发信息</lhButton>
      <lhButton type="info" round>删除</lhButton>
    </div>
    <h4>通过size属性修改，可取值"large","small"</h4>
    <div>
      <lhButton type="primary" size="large">确定</lhButton>
      <lhButton type="success">确定</lhButton>
      <lhButton type="warning" size="small">确定</lhButton>
    </div>
  </div>
</template>

<style scoped></style>
