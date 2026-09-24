<script setup lang="ts">
import { computed } from 'vue'

type HeadingSize = 'hero' | 'section' | 'item'

const props = withDefaults(defineProps<{ level?: 1 | 2 | 3; size?: HeadingSize; id?: string }>(), {
  level: 2,
  size: 'section',
  id: undefined,
})

const tag = computed(() => `h${props.level}`)
</script>

<template>
  <component :is="tag" :id="id" :class="['heading', `heading--${size}`]"><slot /></component>
</template>

<style scoped>
.heading {
  font-family: var(--zs-font-display);
  font-weight: var(--zs-font-weight-semibold);
  line-height: var(--zs-line-height-heading);
  letter-spacing: var(--zs-letter-spacing-heading);
  text-wrap: balance;
}

.heading--hero {
  font-size: var(--zs-font-size-hero);
  line-height: var(--zs-line-height-display);
  letter-spacing: var(--zs-letter-spacing-display);
}

.heading--section {
  font-size: var(--zs-font-size-section);
}

.heading--item {
  font-size: var(--zs-font-size-item);
  font-weight: var(--zs-font-weight-medium);
}
</style>
