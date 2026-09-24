<script setup lang="ts">
import { motion } from 'motion-v'
import { useInternalLink, useMotionPresets } from '@/presentation/composables'

type ButtonVariant = 'primary' | 'secondary'

withDefaults(defineProps<{ href: string; variant?: ButtonVariant }>(), { variant: 'primary' })

const { interactive } = useMotionPresets()
const { navigate } = useInternalLink()
</script>

<template>
  <motion.a
    :href="href"
    :class="['button', `button--${variant}`]"
    v-bind="interactive"
    @click="navigate(href)"
  >
    <slot />
  </motion.a>
</template>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--zs-space-2);
  padding: var(--zs-layout-button-padding-y) var(--zs-layout-button-padding-x);
  border-radius: var(--zs-radius-md);
  border: var(--zs-border-hairline) solid transparent;
  font-family: var(--zs-font-body);
  font-weight: var(--zs-font-weight-semibold);
  white-space: nowrap;
}

.button--primary {
  background: var(--surface-accent);
  color: var(--surface-on-accent);
}

.button--secondary {
  border-color: var(--surface-line);
  color: var(--surface-text);
}
</style>
