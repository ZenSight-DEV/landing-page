<script setup lang="ts">
defineProps<{ skipLabel: string; mainId: string }>()
</script>

<template>
  <div class="landing surface-dark">
    <a :href="`#${mainId}`" class="landing__skip">{{ skipLabel }}</a>
    <slot name="header" />
    <main :id="mainId">
      <slot />
    </main>
    <slot name="footer" />
  </div>
</template>

<style scoped>
.landing {
  min-height: 100vh;
}

.landing__skip {
  position: absolute;
  left: var(--zs-space-4);
  top: calc(-1 * var(--zs-layout-header-height));
  z-index: calc(var(--zs-z-index-header) + 1);
  padding: var(--zs-space-2) var(--zs-space-4);
  border-radius: var(--zs-radius-sm);
  background: var(--surface-accent);
  color: var(--surface-on-accent);
}

.landing__skip:focus {
  top: var(--zs-space-4);
}
</style>
