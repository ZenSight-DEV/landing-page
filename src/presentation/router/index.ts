import { createRouter, createWebHistory } from 'vue-router'
import { siteConfig } from '@/config'
import { ROUTES } from '@/shared/constants'
import { AboutPage, ContactPage, HomePage, ServicesPage } from '@/presentation/components/pages'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (_to, _from, savedPosition) => savedPosition ?? { top: 0 },
  routes: [
    { path: ROUTES.home, name: 'home', component: HomePage },
    { path: ROUTES.about, name: 'about', component: AboutPage },
    { path: ROUTES.services, name: 'services', component: ServicesPage },
    { path: ROUTES.contact, name: 'contact', component: ContactPage },
  ],
})

/** Actualiza el título y la meta descripción según la página activa. */
router.afterEach((to) => {
  const page = siteConfig.meta.pages[to.name as keyof typeof siteConfig.meta.pages]
  if (!page) return

  document.title = page.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
})
