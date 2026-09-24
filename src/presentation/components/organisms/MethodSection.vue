<script setup lang="ts">
import { motion } from 'motion-v'
import type { MethodContent } from '@/domain/entities'
import { motionConfig } from '@/config'
import { SECTION_IDS } from '@/shared/constants'
import { toHeadingId } from '@/shared/utils'
import { BaseContainer, BaseSection } from '@/presentation/components/atoms'
import { MethodStep, SectionIntro } from '@/presentation/components/molecules'
import { useMotionPresets } from '@/presentation/composables'

defineProps<{ content: MethodContent }>()

const { drawOnView } = useMotionPresets()
const headingId = toHeadingId(SECTION_IDS.method)
const { delay } = motionConfig
</script>

<template>
  <BaseSection :id="SECTION_IDS.method" :labelledby="headingId">
    <BaseContainer class="method">
      <SectionIntro :title="content.title" :lead="content.lead" :heading-id="headingId" />

      <div class="method__track">
        <motion.span class="method__line" aria-hidden="true" v-bind="drawOnView()" />
        <ol class="method__steps">
          <MethodStep
            v-for="(stage, index) in content.stages"
            :key="stage.id"
            :stage="stage"
            :reveal-delay="index * delay.stageStep"
          />
        </ol>
      </div>
    </BaseContainer>
  </BaseSection>
</template>

<style scoped>
.method {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-16);
}

.method__track {
  position: relative;
}

.method__line {
  position: absolute;
  inset: 0 0 auto 0;
  height: var(--zs-border-hairline);
  background: var(--surface-accent);
  transform-origin: left center;
}

.method__steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--zs-layout-step-min-width)), 1fr));
  gap: var(--zs-space-12) var(--zs-space-8);
}
</style>
