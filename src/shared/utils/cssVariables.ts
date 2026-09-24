import { CSS_VAR_PREFIX } from '@/shared/constants'

type TokenTree = { readonly [key: string]: string | number | readonly number[] | TokenTree }

const toKebab = (value: string): string =>
  value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

/**
 * Aplana un árbol de tokens en variables CSS.
 * `{ color: { textMuted: '#9CA3AF' } }` → `{ '--zs-color-text-muted': '#9CA3AF' }`
 */
export const flattenTokens = (
  tree: TokenTree,
  path: readonly string[] = [],
): Record<string, string> =>
  Object.entries(tree).reduce<Record<string, string>>((acc, [key, value]) => {
    const nextPath = [...path, toKebab(key)]
    if (typeof value === 'object' && !Array.isArray(value)) {
      return { ...acc, ...flattenTokens(value as TokenTree, nextPath) }
    }
    acc[[CSS_VAR_PREFIX, ...nextPath].join('-')] = String(value)
    return acc
  }, {})
