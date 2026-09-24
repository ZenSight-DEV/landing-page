<script setup lang="ts">
import type { LandingContent } from '@/domain/entities'
import { SectionDivider } from '@/presentation/components/atoms'
import { AboutSection, ValuesSection } from '@/presentation/components/organisms'

defineProps<{ content: LandingContent }>()
</script>

<template>
  <AboutSection :content="content.about" />
  <SectionDivider variant="line" />
  <ValuesSection :content="content.values" />
</template>
