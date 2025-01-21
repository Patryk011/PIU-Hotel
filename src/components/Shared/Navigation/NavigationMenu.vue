<template>
  <ul class="menu-navbar">
    <li v-for="(item, index) in navItems" :key="index">
      <router-link :to="item.link" class="nav-item">
        {{ item.label }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { INavProps } from "./NavigationMenu.types";

defineProps<INavProps>();
</script>

<style lang="scss" scoped>
.menu-navbar {
  display: flex;
  list-style: none;
  gap: 2em;
  margin-right: auto;

  .nav-item {
    text-decoration: none;
    font-family: "Montserrat", serif;
    font-weight: 500;
    color: #262729;
  }
}
</style>
