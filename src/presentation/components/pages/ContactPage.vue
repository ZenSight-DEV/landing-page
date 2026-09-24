<script setup lang="ts">
import type { LandingContent } from '@/domain/entities'
import { SectionDivider } from '@/presentation/components/atoms'
import { ContactSection, TeamSection } from '@/presentation/components/organisms'
import { useTeamMembers } from '@/presentation/composables'

defineProps<{ content: LandingContent }>()

const members = useTeamMembers()
</script>

<template>
  <ContactSection :content="content.contact" />
  <SectionDivider variant="connect" tone="light" />
  <TeamSection :content="content.team" :members="members ?? []" />
</template>
