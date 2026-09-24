<script setup lang="ts">
import type { LandingContent } from '@/domain/entities'
import { SectionDivider } from '@/presentation/components/atoms'
import { AudienceSection, HeroSection } from '@/presentation/components/organisms'

defineProps<{ content: LandingContent }>()
</script>

<template>
  <HeroSection :content="content.hero" />
  <SectionDivider variant="factory" />
  <AudienceSection :content="content.audience" />
</template>
