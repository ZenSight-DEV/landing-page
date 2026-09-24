<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig, type LogoVariant } from '@/config'
import { LOGO_TONES, type LogoTone } from '@/shared/constants'

type LogoSize = 'header' | 'footer' | 'fill'

const props = withDefaults(
  defineProps<{ variant?: LogoVariant; tone?: LogoTone; size?: LogoSize; decorative?: boolean }>(),
  { variant: 'wordmark', tone: LOGO_TONES.light, size: 'header', decorative: false },
)

const source = computed(() => siteConfig.logos[props.variant][props.tone])
const altText = computed(() => (props.decorative ? '' : siteConfig.brand.name))
</script>

<template>
  <img :src="source" :alt="altText" :class="['logo', `logo--${size}`]" />
</template>

<style scoped>
.logo {
  width: auto;
}

.logo--header {
  height: var(--zs-layout-logo-header);
}

.logo--footer {
  height: var(--zs-layout-logo-footer);
}

.logo--fill {
  width: 100%;
  height: auto;
}
</style>
