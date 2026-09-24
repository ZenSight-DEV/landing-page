<script setup lang="ts">
import type { TeamContent, TeamMember } from '@/domain/entities'
import { SECTION_IDS } from '@/shared/constants'
import { toHeadingId } from '@/shared/utils'
import { BaseContainer, BaseSection, BaseText } from '@/presentation/components/atoms'
import { SectionIntro, TeamMemberCard } from '@/presentation/components/molecules'

defineProps<{ content: TeamContent; members: readonly TeamMember[] }>()

const headingId = toHeadingId(SECTION_IDS.team)
</script>

<template>
  <BaseSection :id="SECTION_IDS.team" :labelledby="headingId" class="team-section">
    <BaseContainer class="team">
      <SectionIntro :title="content.title" :lead="content.lead" :heading-id="headingId" />
      <ul v-if="members.length" class="team__grid">
        <li v-for="member in members" :key="member.id">
          <TeamMemberCard :member="member" :labels="content.cardLabels" />
        </li>
      </ul>
      <BaseText v-else tone="muted">{{ content.emptyState }}</BaseText>
    </BaseContainer>
  </BaseSection>
</template>

<style scoped>
.team-section {
  border-top: var(--zs-border-hairline) solid var(--surface-line);
}

.team {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-16);
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--zs-layout-card-min-width)), 1fr));
  gap: var(--zs-space-6);
}
</style>
