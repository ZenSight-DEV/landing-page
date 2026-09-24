import { useRouter } from 'vue-router'
import { ROUTES } from '@/shared/constants'

const routePaths: readonly string[] = Object.values(ROUTES)

/**
 * Intercepta la navegación de un `<a>` solo cuando su `href` es una ruta
 * interna conocida (evita capturar `mailto:`, enlaces externos o descargas).
 */
export const useInternalLink = () => {
  const router = useRouter()

  const navigate = (href: string) => (event: MouseEvent) => {
    if (!routePaths.includes(href)) return
    event.preventDefault()
    router.push(href)
  }

  return { navigate }
}
