<template>
  <!-- icon组件使用示例 -->
  <div>
    <div style="padding: 8px 0px">
      实例中使用的是@vicons/ionicons5包，请先下载npm i @vicons/ionicons5
      并到https://xicons.org/#/寻找你需要的图标
    </div>
    <lh-icon :size="20">
      <AccessibilitySharp />
    </lh-icon>
    <lh-icon :size="20" color="red">
      <AccessibilitySharp />
    </lh-icon>
    <br />
    <lh-icon :size="20">
      <AddOutline />
    </lh-icon>
    <lh-icon :size="20" color="green">
      <AddOutline />
    </lh-icon>
    <br />
    <lh-icon :size="20">
      <AirplaneOutline />
    </lh-icon>
    <lh-icon :size="20" color="blue">
      <AirplaneOutline />
    </lh-icon>
    <br />
    <lhButton type="primary">
      <lh-icon :size="16" :style="{ color: '#fff', marginRight: '4px' }">
        <Flask />
      </lh-icon>
      <span>确定</span>
    </lhButton>
    <lhButton type="success">
      <span>确定</span>
      <lh-icon :size="16" :style="{ color: '#fff', marginLeft: '4px' }">
        <FlagOutline />
      </lh-icon>
    </lhButton>
    <lhButton type="danger">
      <lh-icon :size="16" :style="{ color: 'red', marginRight: '4px' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M256 400V32l176 80l-176 80"
          ></path>
          <path
            d="M256 336c-87 0-175.3 43.2-191.64 124.74C62.39 470.57 68.57 480 80 480h352c11.44 0 17.62-9.43 15.65-19.26C431.3 379.2 343 336 256 336z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          ></path>
        </svg>
      </lh-icon>
      <span>确定</span>
    </lhButton>
  </div>
</template>

<script setup lang="ts">
import lhIcon from '@lh-vui/components/icon'
import lhButton from '@lh-vui/components/button'
import {
  AccessibilitySharp,
  AddOutline,
  AirplaneOutline,
  Flask,
  FlagOutline
} from '@vicons/ionicons5'
</script>

<style lang="scss" scoped></style>
