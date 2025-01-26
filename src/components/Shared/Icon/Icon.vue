<template>
  <div
    :class="['icon-wrapper', { 'has-hover': props.hoverColor }]"
    :style="iconStyles"
    v-html="iconSvgContent"
  />
</template>

<script setup lang="ts">
import { computed, type CSSProperties, onMounted, ref } from "vue";
import { type IIconProps } from "./Icon.types";

const props = defineProps<IIconProps>();

const iconSvgContent = ref<string>("");

onMounted(async () => {
  try {
    const response = await fetch(`/src/assets/icons/${props.iconType}.svg`);

    iconSvgContent.value = await response.text();
  } catch (error) {
    console.error("Error during fetching icon", error);
    iconSvgContent.value = "";
  }
});

const iconStyles = computed<CSSProperties>(() => ({
  "--fill": props.color,
  ...(props.hoverColor && { "--hover-fill": props.hoverColor }),
  width: props.width ? `${props.width}px` : "32px",
  height: props.height ? `${props.height}px` : "32px",
}));
</script>

<style lang="scss" scoped>
.icon-wrapper {
  --fill: #2a90d9;

  :deep(svg) {
    height: inherit;
    width: inherit;
    fill: var(--fill);
    transition: fill 0.1s ease-in, stroke 0.1s ease-in;
  }

  &.has-hover {
    :deep(svg) {
      &:hover {
        fill: var(--hover-fill);
      }
    }
  }
}
</style>
