<script setup lang="ts">
defineProps<{ open: boolean }>()
</script>

<template>
  <svg viewBox="0 0 24 24" class="menu-icon" aria-hidden="true" focusable="false">
    <template v-if="open">
      <path d="M6 6l12 12M18 6L6 18" />
    </template>
    <template v-else>
      <path d="M4 8h16M4 16h16" />
    </template>
  </svg>
</template>

<style scoped>
.menu-icon {
  width: var(--zs-layout-menu-icon-size);
  height: var(--zs-layout-menu-icon-size);
  fill: none;
  stroke: currentColor;
  stroke-width: var(--zs-border-focus);
  stroke-linecap: round;
}
</style>
