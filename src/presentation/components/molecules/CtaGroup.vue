<script setup lang="ts">
import type { CallToAction } from '@/domain/entities'
import { BaseButton } from '@/presentation/components/atoms'

defineProps<{ primary: CallToAction; secondary?: CallToAction }>()
</script>

<template>
  <div class="cta-group">
    <BaseButton :href="primary.href" variant="primary">{{ primary.label }}</BaseButton>
    <BaseButton v-if="secondary" :href="secondary.href" variant="secondary">
      {{ secondary.label }}
    </BaseButton>
  </div>
</template>

<style scoped>
.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--zs-space-4);
}
</style>
