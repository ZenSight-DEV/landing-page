<script setup lang="ts">
import { motion } from 'motion-v'
import type { AudienceContent } from '@/domain/entities'
import { AUDIENCE_HEADING_ID } from '@/shared/constants'
import { AppTag, BaseContainer, BaseText } from '@/presentation/components/atoms'
import { SectionIntro } from '@/presentation/components/molecules'
import { useMotionPresets } from '@/presentation/composables'

defineProps<{ content: AudienceContent }>()

const { revealOnView } = useMotionPresets()
</script>

<template>
  <div class="audience">
    <BaseContainer class="audience__inner">
      <motion.div v-bind="revealOnView()">
        <SectionIntro :title="content.title" :lead="content.lead" :heading-id="AUDIENCE_HEADING_ID" />
      </motion.div>
      <div class="audience__moments">
        <BaseText size="small" tone="muted">{{ content.momentsLabel }}</BaseText>
        <ul class="audience__tags">
          <li v-for="moment in content.moments" :key="moment"><AppTag>{{ moment }}</AppTag></li>
        </ul>
      </div>
    </BaseContainer>
  </div>
</template>

<style scoped>
.audience {
  padding-bottom: var(--zs-layout-section-padding);
}

.audience__inner {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-12);
  padding-top: var(--zs-layout-section-padding);
  border-top: var(--zs-border-hairline) solid var(--surface-line);
}

.audience__moments {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-4);
}

.audience__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--zs-space-3);
}
</style>
