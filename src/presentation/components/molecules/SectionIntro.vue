<script setup lang="ts">
import { BaseHeading, BaseText } from '@/presentation/components/atoms'

defineProps<{ title: string; lead?: string; headingId?: string }>()
</script>

<template>
  <header class="intro">
    <BaseHeading :id="headingId" :level="2" size="section">{{ title }}</BaseHeading>
    <BaseText v-if="lead" size="lead" tone="muted">{{ lead }}</BaseText>
  </header>
</template>

<style scoped>
.intro {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-6);
  max-width: var(--zs-layout-max-width);
}
</style>
