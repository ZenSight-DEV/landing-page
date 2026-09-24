<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { NavigationItem } from '@/domain/entities'
import { useInternalLink } from '@/presentation/composables'

withDefaults(
  defineProps<{ items: readonly NavigationItem[]; orientation?: 'horizontal' | 'vertical' }>(),
  { orientation: 'horizontal' },
)

const emit = defineEmits<{ select: [] }>()

const route = useRoute()
const { navigate } = useInternalLink()

const onClick = (item: NavigationItem) => (event: MouseEvent) => {
  navigate(item.to)(event)
  emit('select')
}
</script>

<template>
  <ul :class="['nav', `nav--${orientation}`]">
    <li v-for="item in items" :key="item.to">
      <a
        :href="item.to"
        class="nav__link"
        :aria-current="route.path === item.to ? 'page' : undefined"
        @click="onClick(item)"
      >
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

.nav__link:hover,
.nav__link[aria-current='page'] {
  color: var(--surface-text);
}
</style>
