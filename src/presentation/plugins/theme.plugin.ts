import type { Plugin } from 'vue'
import { siteConfig, themeConfig } from '@/config'
import { flattenTokens } from '@/shared/utils'

const appendToHead = (tag: string, attributes: Record<string, string>): void => {
  const element = document.createElement(tag)
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
  document.head.appendChild(element)
}

/**
 * Aplica la configuración al documento:
 * variables CSS del tema, fuentes, idioma y metadatos.
 */
export const themePlugin: Plugin = {
  install() {
    const root = document.documentElement
    Object.entries(flattenTokens(themeConfig)).forEach(([name, value]) =>
      root.style.setProperty(name, value),
    )

    root.lang = siteConfig.meta.lang
    document.title = siteConfig.meta.title

    siteConfig.fonts.preconnect.forEach((href) =>
      appendToHead('link', { rel: 'preconnect', href, crossorigin: '' }),
    )
    appendToHead('link', { rel: 'stylesheet', href: siteConfig.fonts.stylesheet })
    appendToHead('meta', { name: 'description', content: siteConfig.meta.description })
    appendToHead('meta', { name: 'theme-color', content: themeConfig.color.bg })
  },
}
