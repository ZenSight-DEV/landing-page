<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { AnimatePresence, motion, MotionConfig } from 'motion-v'
import { motionConfig } from '@/config'
import { MAIN_CONTENT_ID } from '@/shared/constants'
import { LandingTemplate } from '@/presentation/components/templates'
import { SiteFooter, SiteHeader } from '@/presentation/components/organisms'
import { useLandingContent, useMotionPresets } from '@/presentation/composables'

const content = useLandingContent()
const route = useRoute()
const { pageTransition } = useMotionPresets()
</script>

<template>
  <MotionConfig :reduced-motion="motionConfig.reducedMotion">
    <LandingTemplate v-if="content" :skip-label="content.ui.skipToContent" :main-id="MAIN_CONTENT_ID">
      <template #header>
        <SiteHeader :navigation="content.navigation" :cta="content.headerCta" :labels="content.ui" />
      </template>

      <RouterView v-slot="{ Component }">
        <AnimatePresence mode="wait">
          <motion.div :key="route.fullPath" v-bind="pageTransition()">
            <component :is="Component" :content="content" />
          </motion.div>
        </AnimatePresence>
      </RouterView>

      <template #footer>
        <SiteFooter :content="content.footer" />
      </template>
    </LandingTemplate>
  </MotionConfig>
</template>
