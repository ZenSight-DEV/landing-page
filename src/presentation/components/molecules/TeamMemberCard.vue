<script setup lang="ts">
import type { TeamCardLabels, TeamMember } from '@/domain/entities'
import { AppAvatar, AppTag, BaseHeading, BaseText } from '@/presentation/components/atoms'
import MemberDetail from './MemberDetail.vue'

defineProps<{ member: TeamMember; labels: TeamCardLabels }>()
</script>

<template>
  <article class="member">
    <AppAvatar :name="member.name" :photo-url="member.photoUrl" />
    <div class="member__body">
      <BaseHeading :level="3" size="item">{{ member.name }}</BaseHeading>
      <BaseText size="small" tone="accent">{{ member.role }}</BaseText>
    </div>
    <BaseText size="small" tone="muted">{{ member.bio }}</BaseText>

    <MemberDetail v-if="member.education.length" :label="labels.education">
      <ul class="member__education">
        <li v-for="study in member.education" :key="`${study.degree}-${study.institution}`">
          <BaseText size="small" class="member__degree">{{ study.degree }}</BaseText>
          <BaseText size="small" tone="muted">
            {{ study.institution }}<template v-if="study.year">, {{ study.year }}</template>
          </BaseText>
        </li>
      </ul>
    </MemberDetail>

    <MemberDetail v-if="member.companies.length" :label="labels.companies">
      <ul class="member__companies">
        <li v-for="company in member.companies" :key="company"><AppTag>{{ company }}</AppTag></li>
      </ul>
    </MemberDetail>

    <a
      v-if="member.linkedinUrl"
      :href="member.linkedinUrl"
      class="member__link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ labels.linkedin }}
    </a>
  </article>
</template>

<style scoped>
.member {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-6);
  padding: var(--zs-space-8);
  border-radius: var(--zs-radius-lg);
  background: var(--surface-card);
  height: 100%;
}

.member__body {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-1);
}

.member__education {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-3);
}

.member__degree {
  font-weight: var(--zs-font-weight-medium);
}

.member__companies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--zs-space-2);
}

.member__link {
  margin-top: auto;
  color: var(--surface-accent);
  font-size: var(--zs-font-size-small);
  font-weight: var(--zs-font-weight-medium);
  text-decoration: underline;
  text-underline-offset: var(--zs-space-1);
}
</style>
