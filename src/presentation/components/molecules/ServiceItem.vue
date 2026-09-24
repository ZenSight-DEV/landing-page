<script setup lang="ts">
import type { Service } from '@/domain/entities'
import { BaseText } from '@/presentation/components/atoms'

defineProps<{ service: Service }>()
</script>

<template>
  <div class="service">
    <BaseText as="h4" size="body" class="service__name">{{ service.name }}</BaseText>
    <BaseText size="small" tone="muted">{{ service.description }}</BaseText>
  </div>
</template>

<style scoped>
.service {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-2);
}

.service__name {
  font-weight: var(--zs-font-weight-semibold);
}
</style>
