<script setup lang="ts">
type TextSize = 'lead' | 'body' | 'small'
type TextTone = 'default' | 'muted' | 'accent'

withDefaults(defineProps<{ as?: string; size?: TextSize; tone?: TextTone }>(), {
  as: 'p',
  size: 'body',
  tone: 'default',
})
</script>

<template>
  <component :is="as" :class="['text', `text--${size}`, `text--${tone}`]"><slot /></component>
</template>

<style scoped>
.text {
  max-width: var(--zs-layout-prose-max);
  text-wrap: pretty;
}

.text--lead {
  font-size: var(--zs-font-size-lead);
}

.text--body {
  font-size: var(--zs-font-size-body);
}

.text--small {
  font-size: var(--zs-font-size-small);
}

.text--default {
  color: var(--surface-text);
}

.text--muted {
  color: var(--surface-muted);
}

.text--accent {
  color: var(--surface-accent);
}
</style>
