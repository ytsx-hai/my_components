<template>
  <!-- button组件使用示例 -->
  <div>
    <h4>
      通过type属性修改，可取值"primary"、"danger"、"success"、"warning"、"info"
    </h4>
    <div>
      <lhButton>default</lhButton>
      <lhButton type="primary" disabled>primary</lhButton>
      <lhButton type="danger">danger</lhButton>
      <lhButton type="success" loading>success</lhButton>
      <lhButton type="warning">warning</lhButton>
      <lhButton type="info">info</lhButton>
    </div>
    <h4>通过round属性修改，可取值true,false,</h4>
    <div>
      <lhButton round>default</lhButton>
      <lhButton type="primary" round>确定</lhButton>
      <lhButton type="danger" round>发送</lhButton>
      <lhButton type="success" round>提交表单</lhButton>
      <lhButton type="warning" loading round>发信息</lhButton>
      <lhButton type="info" round>删除</lhButton>
    </div>
    <h4>通过size属性修改，可取值"large","small"</h4>
    <div>
      <lhButton type="primary" size="large">确定</lhButton>
      <lhButton type="success">确定</lhButton>
      <lhButton type="warning" size="small">确定</lhButton>
    </div>
    <div>
      <lhButton type="primary" size="large" circle>确</lhButton>
      <lhButton type="success" circle>确</lhButton>
      <lhButton type="warning" size="small" circle>确</lhButton>
    </div>
    <h4>通过plain属性修改，可取值true,false,</h4>
    <div>
      <lhButton round plain>default</lhButton>
      <lhButton type="primary" round plain>确定</lhButton>
      <lhButton type="danger" round plain>发送</lhButton>
      <lhButton type="success" round plain>提交表单</lhButton>
      <lhButton type="warning" round plain>发信息</lhButton>
      <lhButton type="info" round plain>删除</lhButton>
    </div>
    <h4>
      通过circle属性修改，可取值true,false,注意：round和circle同在，round优先级高
    </h4>
    <div>
      <lhButton plain circle>d</lhButton>
      <lhButton type="primary" plain circle>p</lhButton>
      <lhButton type="danger" plain circle>g</lhButton>
      <lhButton type="success" plain circle>s</lhButton>
      <lhButton type="warning" plain circle>w</lhButton>
      <lhButton type="info" plain circle>i</lhButton>
    </div>
    <h4>通过style自定义样式</h4>
    <div>
      <lhButton
        type="primary"
        native-type="submit"
        :style="{ backgroundColor: '#0182ea' }"
        @click="handleBtnClick"
      >
        确定
      </lhButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import lhButton from '@lh-vui/components/button'
const handleBtnClick = () => {
  console.log('点击了按钮')
}
</script>

<style lang="scss" scoped></style>
