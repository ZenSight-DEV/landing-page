<script setup lang="ts">
import { MAIN_CONTENT_ID } from '@/shared/constants'
import { LandingTemplate } from '@/presentation/components/templates'
import {
  AboutSection,
  AudienceSection,
  ContactSection,
  HeroSection,
  MethodSection,
  SiteFooter,
  SiteHeader,
  TeamSection,
} from '@/presentation/components/organisms'
import { useLandingContent, useTeamMembers } from '@/presentation/composables'

const content = useLandingContent()
const members = useTeamMembers()
</script>

<template>
  <LandingTemplate v-if="content" :skip-label="content.ui.skipToContent" :main-id="MAIN_CONTENT_ID">
    <template #header>
      <SiteHeader :navigation="content.navigation" :cta="content.headerCta" :labels="content.ui" />
    </template>

    <HeroSection :content="content.hero" />
    <AudienceSection :content="content.audience" />
    <AboutSection :content="content.about" />
    <MethodSection :content="content.method" />
    <TeamSection :content="content.team" :members="members ?? []" />
    <ContactSection :content="content.contact" />

    <template #footer>
      <SiteFooter :content="content.footer" />
    </template>
  </LandingTemplate>
</template>
