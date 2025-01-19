<template>
  <div :class="['icon-wrapper', { 'has-hover': props.hoverColor }]" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type IIconProps } from "./Icon.types";

const props = defineProps<IIconProps>();

const iconSvgContent = ref<string>("");
</script>
