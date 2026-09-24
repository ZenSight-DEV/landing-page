<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '@/config'
import { getInitials } from '@/shared/utils'

const props = defineProps<{ name: string; photoUrl?: string }>()

const initials = computed(() => getInitials(props.name, siteConfig.team.initialsLength))
</script>

<template>
  <img v-if="photoUrl" :src="photoUrl" alt="" class="avatar" />
  <span v-else class="avatar avatar--initials" aria-hidden="true">{{ initials }}</span>
</template>

<style scoped>
.avatar {
  width: var(--zs-layout-avatar-size);
  height: var(--zs-layout-avatar-size);
  border-radius: var(--zs-radius-lg);
  object-fit: cover;
}

.avatar--initials {
  display: grid;
  place-items: center;
  background: var(--surface-accent-soft);
  color: var(--surface-accent);
  font-family: var(--zs-font-display);
  font-size: var(--zs-font-size-item);
  font-weight: var(--zs-font-weight-semibold);
  box-shadow: inset 0 0 0 var(--zs-border-hairline) var(--surface-accent);
}
</style>
