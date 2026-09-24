<script setup lang="ts">
import type { FooterContent } from '@/domain/entities'
import { siteConfig } from '@/config'
import { BaseContainer, BaseText, BrandLogo } from '@/presentation/components/atoms'

defineProps<{ content: FooterContent }>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer surface-dark">
    <BaseContainer class="footer__inner">
      <BrandLogo variant="wordmark" size="footer" />
      <BaseText size="small" tone="muted">
        © {{ year }} {{ siteConfig.brand.legalName }}. {{ content.rights }}
      </BaseText>
      <a :href="siteConfig.url" class="footer__domain">{{ siteConfig.domain }}</a>
    </BaseContainer>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: var(--zs-space-12);
  border-top: var(--zs-border-hairline) solid var(--surface-line);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--zs-space-6);
}

.footer__domain {
  color: var(--surface-muted);
  font-size: var(--zs-font-size-small);
}

.footer__domain:hover {
  color: var(--surface-text);
}
</style>
