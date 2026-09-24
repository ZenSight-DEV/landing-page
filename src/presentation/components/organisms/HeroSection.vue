<script setup lang="ts">
import { motion } from 'motion-v'
import type { HeroContent } from '@/domain/entities'
import { motionConfig } from '@/config'
import { SECTION_IDS } from '@/shared/constants'
import { toHeadingId } from '@/shared/utils'
import { BaseContainer, BaseHeading, BaseSection, BaseText } from '@/presentation/components/atoms'
import { BrandRipple, CtaGroup } from '@/presentation/components/molecules'
import { useMotionPresets } from '@/presentation/composables'

defineProps<{ content: HeroContent }>()

const { focusIn, riseIn } = useMotionPresets()
const { heroStart, heroStep } = motionConfig.delay
const headingId = toHeadingId(SECTION_IDS.hero)
</script>

<template>
  <BaseSection :id="SECTION_IDS.hero" :labelledby="headingId" class="hero">
    <BaseContainer class="hero__grid">
      <div class="hero__copy">
        <motion.div v-bind="focusIn(heroStart)">
          <BaseHeading :id="headingId" :level="1" size="hero">{{ content.title }}</BaseHeading>
        </motion.div>
        <motion.div v-bind="riseIn(heroStart + heroStep * 2)">
          <BaseText size="lead" tone="muted">{{ content.lead }}</BaseText>
        </motion.div>
        <motion.div v-bind="riseIn(heroStart + heroStep * 3)">
          <CtaGroup :primary="content.primaryCta" :secondary="content.secondaryCta" />
        </motion.div>
      </div>

      <BrandRipple class="hero__visual" :start-delay="heroStart" :symbol-delay="heroStart + heroStep" />
    </BaseContainer>
  </BaseSection>
</template>

<style scoped>
.hero {
  min-height: calc(100svh - var(--zs-layout-header-height));
  display: flex;
  align-items: center;
}

.hero__grid {
  display: grid;
  grid-template-columns: var(--zs-layout-split-columns);
  align-items: center;
  gap: var(--zs-space-16);
}

.hero__copy {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-8);
}

.hero__visual {
  justify-self: center;
}
</style>
