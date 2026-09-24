<script setup lang="ts">
import type { NavigationItem } from '@/domain/entities'
import { toAnchor } from '@/shared/utils'

withDefaults(
  defineProps<{ items: readonly NavigationItem[]; orientation?: 'horizontal' | 'vertical' }>(),
  { orientation: 'horizontal' },
)

const emit = defineEmits<{ select: [] }>()
</script>

<template>
  <ul :class="['nav', `nav--${orientation}`]">
    <li v-for="item in items" :key="item.targetId">
      <a :href="toAnchor(item.targetId)" class="nav__link" @click="emit('select')">
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<style scoped>
.nav {
  display: flex;
  gap: var(--zs-space-8);
}

.nav--vertical {
  flex-direction: column;
  gap: var(--zs-space-6);
}

.nav__link {
  color: var(--surface-muted);
  font-weight: var(--zs-font-weight-medium);
  transition: color var(--zs-transition-fast);
}

.nav--vertical .nav__link {
  font-family: var(--zs-font-display);
  font-size: var(--zs-font-size-item);
  color: var(--surface-text);
}

.nav__link:hover {
  color: var(--surface-text);
}
</style>
