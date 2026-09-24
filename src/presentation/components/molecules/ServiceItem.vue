<script setup lang="ts">
import type { Service } from '@/domain/entities'
import { AppTag, BaseText } from '@/presentation/components/atoms'

defineProps<{ service: Service }>()
</script>

<template>
  <div class="service">
    <div class="service__head">
      <BaseText as="h4" size="body" class="service__name">{{ service.name }}</BaseText>
      <AppTag v-if="service.tag">{{ service.tag }}</AppTag>
    </div>
    <BaseText size="small" tone="muted">{{ service.description }}</BaseText>
  </div>
</template>

<style scoped>
.service {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-2);
}

.service__head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--zs-space-2);
}

.service__name {
  font-weight: var(--zs-font-weight-semibold);
}
</style>
