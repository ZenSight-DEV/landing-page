<script setup lang="ts">
import type { LandingContent } from '@/domain/entities'
import { MethodSection, ServicesSection } from '@/presentation/components/organisms'

defineProps<{ content: LandingContent }>()
</script>

<template>
  <MethodSection :content="content.method" />
  <ServicesSection :content="content.services" />
</template>
