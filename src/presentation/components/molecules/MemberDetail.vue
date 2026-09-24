<script setup lang="ts">
import { BaseText } from '@/presentation/components/atoms'

/** Bloque de detalle de un integrante: una etiqueta y su contenido. */
defineProps<{ label: string }>()
</script>

<template>
  <div class="detail">
    <BaseText as="h4" size="small" tone="muted" class="detail__label">{{ label }}</BaseText>
    <slot />
  </div>
</template>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-3);
  padding-top: var(--zs-space-6);
  border-top: var(--zs-border-hairline) solid var(--surface-line);
}

.detail__label {
  font-weight: var(--zs-font-weight-medium);
}
</style>
