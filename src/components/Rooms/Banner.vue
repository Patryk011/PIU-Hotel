<template>
  <div class="banner">
    <h3>{{ label }}</h3>
  </div>
</template>

<script setup lang="ts">
interface IBannerProps {
  label: string;
}

defineProps<IBannerProps>();
</script>

<style lang="scss" scoped>
.banner {
  padding: 2em;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 2em;
}
</style>
