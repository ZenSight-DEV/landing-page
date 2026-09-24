<script setup lang="ts">
import type { ContactContent } from '@/domain/entities'
import { siteConfig } from '@/config'
import { LOGO_TONES, MAILTO_SCHEME, SECTION_IDS, SURFACE_TONES } from '@/shared/constants'
import { toHeadingId } from '@/shared/utils'
import {
  BaseButton,
  BaseContainer,
  BaseHeading,
  BaseSection,
  BaseText,
} from '@/presentation/components/atoms'
import { BrandRipple } from '@/presentation/components/molecules'

defineProps<{ content: ContactContent }>()

const headingId = toHeadingId(SECTION_IDS.contact)
</script>

<template>
  <BaseSection :id="SECTION_IDS.contact" :tone="SURFACE_TONES.light" :labelledby="headingId">
    <BaseContainer class="contact">
      <div class="contact__copy">
        <BaseHeading :id="headingId" :level="2" size="section">{{ content.title }}</BaseHeading>
        <BaseText size="lead" tone="muted">{{ content.lead }}</BaseText>
        <div class="contact__actions">
          <BaseButton :href="content.cta.href">{{ content.cta.label }}</BaseButton>
          <BaseText size="small" tone="muted">
            {{ content.emailLabel }}
            <a :href="`${MAILTO_SCHEME}${siteConfig.contactEmail}`" class="contact__email">
              {{ siteConfig.contactEmail }}
            </a>
          </BaseText>
        </div>
      </div>
      <BrandRipple class="contact__visual" :tone="LOGO_TONES.dark" :animated="false" />
    </BaseContainer>
  </BaseSection>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: var(--zs-layout-split-columns);
  gap: var(--zs-space-16);
  align-items: center;
}

.contact__copy {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-6);
}

.contact__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--zs-space-4);
  padding-top: var(--zs-space-4);
}

.contact__email {
  color: var(--surface-accent);
  font-weight: var(--zs-font-weight-medium);
  text-decoration: underline;
  text-underline-offset: var(--zs-space-1);
}

.contact__visual {
  justify-self: center;
}
</style>
