<script setup lang="ts">
import { motion } from 'motion-v'
import type { ServicesContent } from '@/domain/entities'
import { motionConfig } from '@/config'
import { SECTION_IDS, SURFACE_TONES } from '@/shared/constants'
import { toHeadingId } from '@/shared/utils'
import { BaseContainer, BaseSection } from '@/presentation/components/atoms'
import { CtaGroup, SectionIntro, ServiceItem } from '@/presentation/components/molecules'
import { useMotionPresets } from '@/presentation/composables'

defineProps<{ content: ServicesContent }>()

const { revealOnView } = useMotionPresets()
const headingId = toHeadingId(SECTION_IDS.services)
const { delay } = motionConfig
</script>

<template>
  <BaseSection :id="SECTION_IDS.services" :tone="SURFACE_TONES.light" :labelledby="headingId">
    <BaseContainer class="services">
      <SectionIntro :title="content.title" :lead="content.lead" :heading-id="headingId" />

      <ul class="services__grid">
        <motion.li
          v-for="(service, index) in content.services"
          :key="service.id"
          class="services__card"
          v-bind="revealOnView(index * delay.gridStep)"
        >
          <ServiceItem :service="service" />
        </motion.li>
      </ul>

      <CtaGroup :primary="content.cta" />
    </BaseContainer>
  </BaseSection>
</template>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-16);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--zs-layout-card-min-width)), 1fr));
  gap: var(--zs-space-6);
}

.services__card {
  padding: var(--zs-space-8);
  border-radius: var(--zs-radius-lg);
  background: var(--surface-card);
}
</style>
