<script setup lang="ts">
import { SURFACE_TONES, type SectionId, type SurfaceTone } from '@/shared/constants'

withDefaults(defineProps<{ id: SectionId; tone?: SurfaceTone; labelledby?: string }>(), {
  tone: SURFACE_TONES.dark,
  labelledby: undefined,
})
</script>

<template>
  <section :id="id" :class="['section', `surface-${tone}`]" :aria-labelledby="labelledby">
    <slot />
  </section>
</template>

<style scoped>
.section {
  padding-block: var(--zs-layout-section-padding);
}
</style>
