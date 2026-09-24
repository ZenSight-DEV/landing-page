<script setup lang="ts">
withDefaults(defineProps<{ as?: string }>(), { as: 'div' })
</script>

<template>
  <component :is="as" class="container"><slot /></component>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: calc(var(--zs-layout-max-width) + 2 * var(--zs-layout-gutter));
  margin-inline: auto;
  padding-inline: var(--zs-layout-gutter);
}
</style>
