<script setup lang="ts">
import type { StatementContent } from '@/domain/entities'
import { BaseText } from '@/presentation/components/atoms'

defineProps<{ statement: StatementContent }>()
</script>

<template>
  <figure class="statement">
    <figcaption>
      <BaseText as="span" size="small" tone="accent" class="statement__label">
        {{ statement.label }}
      </BaseText>
    </figcaption>
    <blockquote class="statement__text">{{ statement.text }}</blockquote>
  </figure>
</template>

<style scoped>
.statement {
  display: flex;
  flex-direction: column;
  gap: var(--zs-space-3);
  padding-top: var(--zs-space-6);
  border-top: var(--zs-border-hairline) solid var(--surface-line);
}

.statement__label {
  font-weight: var(--zs-font-weight-semibold);
}

.statement__text {
  font-family: var(--zs-font-display);
  font-size: var(--zs-font-size-item);
  font-weight: var(--zs-font-weight-medium);
  line-height: var(--zs-line-height-heading);
  letter-spacing: var(--zs-letter-spacing-heading);
  text-wrap: balance;
}
</style>
