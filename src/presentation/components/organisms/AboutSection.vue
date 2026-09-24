<script setup lang="ts">
import type { AboutContent } from '@/domain/entities'
import { SECTION_IDS, SURFACE_TONES } from '@/shared/constants'
import { toHeadingId } from '@/shared/utils'
import { BaseContainer, BaseSection, BaseText } from '@/presentation/components/atoms'
import { SectionIntro, StatementBlock } from '@/presentation/components/molecules'

defineProps<{ content: AboutContent }>()

const headingId = toHeadingId(SECTION_IDS.about)
</script>

<template>
  <BaseSection :id="SECTION_IDS.about" :tone="SURFACE_TONES.light" :labelledby="headingId">
    <BaseContainer class="about">
      <div class="about__story">
        <SectionIntro :title="content.title" :heading-id="headingId" />
        <BaseText v-for="paragraph in content.paragraphs" :key="paragraph" size="lead" tone="muted">
          {{ paragraph }}
        </BaseText>
        <BaseText size="lead">{{ content.closing }}</BaseText>
      </div>
      <div class="about__statements">
        <StatementBlock :statement="content.mission" />
        <StatementBlock :statement="content.vision" />
      </div>
    </BaseContainer>
  </BaseSection>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: var(--zs-layout-split-columns);
  gap: var(--zs-space-16);
  align-items: start;
}

.about__story {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-6);
}

.about__statements {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-12);
}
</style>
