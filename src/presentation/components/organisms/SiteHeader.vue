<script setup lang="ts">
import { ref, watch } from 'vue'
import { AnimatePresence, motion } from 'motion-v'
import { useMediaQuery } from '@vueuse/core'
import type { CallToAction, NavigationItem, UiLabels } from '@/domain/entities'
import { themeConfig } from '@/config'
import { ROUTES } from '@/shared/constants'
import { BaseButton, BaseContainer, BrandLogo, MenuIcon } from '@/presentation/components/atoms'
import { NavLinks } from '@/presentation/components/molecules'
import { useInternalLink, useMotionPresets } from '@/presentation/composables'

defineProps<{ navigation: readonly NavigationItem[]; cta: CallToAction; labels: UiLabels }>()

const isDesktop = useMediaQuery(`(min-width: ${themeConfig.breakpoint.desktopNav}px)`)
const isMenuOpen = ref(false)
const { menu } = useMotionPresets()
const { navigate } = useInternalLink()

const onLogoClick = (event: MouseEvent) => {
  navigate(ROUTES.home)(event)
  closeMenu()
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(isDesktop, closeMenu)
</script>

<template>
  <header class="header surface-dark">
    <BaseContainer class="header__bar">
      <a :href="ROUTES.home" :aria-label="labels.homeLink" @click="onLogoClick">
        <BrandLogo variant="wordmark" size="header" decorative />
      </a>

      <nav v-if="isDesktop" :aria-label="labels.mainNavigation" class="header__nav">
        <NavLinks :items="navigation" />
        <BaseButton :href="cta.href">{{ cta.label }}</BaseButton>
      </nav>

      <button
        v-else
        type="button"
        class="header__toggle"
        :aria-expanded="isMenuOpen"
        :aria-label="isMenuOpen ? labels.closeMenu : labels.openMenu"
        aria-controls="mobile-menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <MenuIcon :open="isMenuOpen" />
      </button>
    </BaseContainer>

    <AnimatePresence>
      <motion.nav
        v-if="!isDesktop && isMenuOpen"
        id="mobile-menu"
        :aria-label="labels.mainNavigation"
        class="header__menu"
        v-bind="menu"
      >
        <BaseContainer class="header__menu-inner">
          <NavLinks :items="navigation" orientation="vertical" @select="closeMenu" />
          <BaseButton :href="cta.href" @click="closeMenu">{{ cta.label }}</BaseButton>
        </BaseContainer>
      </motion.nav>
    </AnimatePresence>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: var(--zs-z-index-header);
  background: var(--zs-effect-header-backdrop);
  backdrop-filter: blur(var(--zs-effect-header-blur));
  -webkit-backdrop-filter: blur(var(--zs-effect-header-blur));
  border-bottom: var(--zs-border-hairline) solid var(--surface-line);
}

.header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--zs-layout-header-height);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--zs-space-12);
}

.header__toggle {
  display: grid;
  place-items: center;
  padding: var(--zs-space-2);
  margin-right: calc(-1 * var(--zs-space-2));
}

.header__menu {
  border-top: var(--zs-border-hairline) solid var(--surface-line);
}

.header__menu-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--zs-space-8);
  padding-block: var(--zs-space-8) var(--zs-space-12);
}
</style>
