# Arquitectura

## Flujo de datos

```
infrastructure/data/*.ts            (contenido y equipo)
        │
        ▼
infrastructure/repositories/*       implementan ──► domain/repositories (puertos)
        │
        ▼
application/use-cases/*             GetLandingContent · GetTeamMembers
        │   (inyectados en presentation/di/container.ts)
        ▼
presentation/composables/*          useLandingContent · useTeamMembers
        │
        ▼
pages/LandingPage.vue ──props──► organisms ──► molecules ──► atoms
```

## Capas y reglas

| Capa | Puede importar | Nunca importa |
| --- | --- | --- |
| `shared` | nada del proyecto | cualquier capa |
| `config` | `shared`, assets | dominio, Vue |
| `domain` | `shared` | Vue, infraestructura, presentación |
| `application` | `domain` | Vue, infraestructura |
| `infrastructure` | `domain`, `config`, `shared` | presentación |
| `presentation` | todas | — |

## Tema

1. `config/theme.config.ts` define paleta, roles de color y medidas.
2. `presentation/plugins/theme.plugin.ts` los convierte en variables CSS con `flattenTokens` (prefijo `CSS_VAR_PREFIX`).
3. `presentation/styles/base.css` define los tonos de superficie.
4. Cada componente usa solo `var(--zs-…)` y `var(--surface-…)`.

Para crear un tema alterno, basta con otro objeto con la misma forma que `themeConfig`.

## Animación

`useMotionPresets()` expone presets construidos desde `motion.config.ts`:

| Preset | Uso |
| --- | --- |
| `focusIn` | Titular y símbolo del hero: de desenfocado a nítido |
| `riseIn` | Texto y botones del hero al cargar |
| `ripple` | Anillos del símbolo que se expanden |
| `revealOnView` | Etapas del método al entrar en pantalla |
| `drawOnView` | Línea del método que se dibuja |
| `interactive` | Botones: elevar al pasar el cursor, hundir al presionar |
| `menu` | Menú móvil (entrada y salida con `AnimatePresence`) |

`<MotionConfig reduced-motion="user">` en `App.vue` respeta la preferencia de movimiento reducido.

## Cambiar la fuente de contenido

Para leer desde un CMS o API:

1. Crea `infrastructure/repositories/ApiLandingContentRepository.ts` que implemente `LandingContentRepository`.
2. Cámbialo en `presentation/di/container.ts`.

Ningún componente ni caso de uso cambia.
