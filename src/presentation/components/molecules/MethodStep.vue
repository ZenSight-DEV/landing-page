<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import type { MethodStage } from '@/domain/entities'
import { siteConfig } from '@/config'
import { BaseHeading, BaseText } from '@/presentation/components/atoms'
import { useMotionPresets } from '@/presentation/composables'
import ServiceItem from './ServiceItem.vue'

const props = withDefaults(defineProps<{ stage: MethodStage; revealDelay?: number }>(), {
  revealDelay: 0,
})

const { revealOnView } = useMotionPresets()

const stepNumber = computed(() =>
  String(props.stage.order).padStart(siteConfig.method.stepNumberDigits, siteConfig.method.stepNumberPad),
)
</script>

<template>
  <motion.li class="step" v-bind="revealOnView(revealDelay)">
    <span class="step__number" aria-hidden="true">{{ stepNumber }}</span>
    <div class="step__head">
      <BaseHeading :level="3" size="item">{{ stage.name }}</BaseHeading>
      <BaseText size="small" tone="accent">{{ stage.summary }}</BaseText>
    </div>
    <div class="step__services">
      <ServiceItem v-for="service in stage.services" :key="service.id" :service="service" />
    </div>
  </motion.li>
</template>

<style scoped>
.step {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-6);
  padding-top: var(--zs-space-8);
}

.step__number {
  font-family: var(--zs-font-display);
  font-size: var(--zs-font-size-step-number);
  font-weight: var(--zs-font-weight-semibold);
  line-height: var(--zs-line-height-display);
  letter-spacing: var(--zs-letter-spacing-display);
  color: var(--surface-accent);
}

.step__head {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-1);
}

.step__services {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-6);
}
</style>
