<script setup lang="ts">
import { motion } from 'motion-v'
import type { ValuesContent } from '@/domain/entities'
import { motionConfig } from '@/config'
import { SECTION_IDS } from '@/shared/constants'
import { toHeadingId } from '@/shared/utils'
import { BaseContainer, BaseHeading, BaseSection, BaseText } from '@/presentation/components/atoms'
import { SectionIntro, StatementBlock } from '@/presentation/components/molecules'
import { useMotionPresets } from '@/presentation/composables'

defineProps<{ content: ValuesContent }>()

const { revealOnView } = useMotionPresets()
const headingId = toHeadingId(SECTION_IDS.values)
const { delay } = motionConfig
</script>

<template>
  <BaseSection :id="SECTION_IDS.values" :labelledby="headingId">
    <BaseContainer class="values">
      <SectionIntro :title="content.title" :lead="content.lead" :heading-id="headingId" />

      <div class="values__concept">
        <BaseHeading :level="3" size="item">{{ content.concept.title }}</BaseHeading>
        <div class="values__concept-pair">
          <StatementBlock :statement="content.concept.zen" />
          <StatementBlock :statement="content.concept.sight" />
        </div>
        <BaseText size="lead" tone="muted">{{ content.concept.promise }}</BaseText>
      </div>

      <ul class="values__grid">
        <motion.li
          v-for="(trait, index) in content.traits"
          :key="trait.id"
          class="values__card"
          v-bind="revealOnView(index * delay.gridStep)"
        >
          <BaseText as="h4" size="body" class="values__name">{{ trait.name }}</BaseText>
          <BaseText size="small" tone="muted">{{ trait.description }}</BaseText>
        </motion.li>
      </ul>
    </BaseContainer>
  </BaseSection>
</template>

<style scoped>
.values {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-16);
}

.values__concept {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-6);
  max-width: var(--zs-layout-prose-max);
}

.values__concept-pair {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
  gap: var(--zs-space-8);
}

.values__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--zs-layout-step-min-width)), 1fr));
  gap: var(--zs-space-8);
}

.values__card {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-2);
  padding-top: var(--zs-space-6);
  border-top: var(--zs-border-hairline) solid var(--surface-line);
}

.values__name {
  font-weight: var(--zs-font-weight-semibold);
  color: var(--surface-accent);
}
</style>
