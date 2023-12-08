<script setup lang="ts">
console.log(
  getComputedStyle(document.documentElement).getPropertyValue(
    "--lh-success-color"
  )
);
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
.test {
  color: var(--lh-primary-color);
}
</style>
