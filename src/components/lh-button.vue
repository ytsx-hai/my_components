<template>
  <div class="lh-button" @click="handleClick">this is lh-button</div>
</template>

<script setup lang="ts" name="lh-button">
// 获取:root元素
const root = document.documentElement;

const handleClick = () => {
  root.style.setProperty("--lh-primary-color", "red");
};
</script>

<style lang="scss" scoped>
$font-size: 50px;
.lh-button {
  color: var(--lh-primary-color);
  font-size: $font-size;
}
</style>
