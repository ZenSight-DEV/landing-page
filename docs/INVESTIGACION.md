# Investigación: cómo construir la landing

## 1. Motion para Vue (`motion-v`)

Motion (antes Framer Motion) tiene un port oficial para Vue: el paquete `motion-v`.

- **Componente `<motion.*>`**: cualquier etiqueta HTML o SVG (`motion.div`, `motion.a`, `motion.rect`) acepta `initial`, `animate`, `exit`, `transition` y gestos (`whileHover`, `whilePress`, `whileInView`).
- **Animación al entrar en pantalla**: `whileInView` con `inViewOptions: { once, amount }`.
- **Salidas**: `<AnimatePresence>` + `v-if` animan elementos que se retiran (se usa en el menú móvil).
- **`<MotionConfig>`**: configuración global; `reducedMotion="user"` respeta la preferencia de "reducir movimiento" del sistema y desactiva animaciones de transformación.
- **Rendimiento**: anima fuera del ciclo de render de Vue y aprovecha aceleración por hardware (transform, opacity, filter).
- **Dependencia par**: requiere `@vueuse/core`, que además usamos para `useMediaQuery`.

Decisión: usar `motion.*` con **presets** centralizados (`useMotionPresets`) que leen `motion.config.ts`. Ningún componente escribe duraciones o curvas.

## 2. Atomic Design en Vue

Metodología de Brad Frost: átomos → moléculas → organismos → plantillas → páginas.

| Nivel | Criterio en este proyecto | Ejemplos |
| --- | --- | --- |
| Átomos | No dependen de otros componentes del proyecto | `BaseButton`, `BaseHeading`, `BrandLogo`, `RingsGraphic` |
| Moléculas | Combinan átomos para una función concreta | `NavLinks`, `MethodStep`, `TeamMemberCard`, `BrandRipple` |
| Organismos | Secciones completas con su propio contenido | `SiteHeader`, `HeroSection`, `TeamSection` |
| Plantillas | Estructura sin contenido (slots) | `LandingTemplate` |
| Páginas | Conectan datos reales con la plantilla | `LandingPage` |

Regla: un nivel solo importa niveles inferiores. Los componentes reciben datos por props; solo la página habla con los casos de uso.

## 3. Clean Architecture en el frontend

Separación en capas con dependencias hacia adentro:

- **Dominio**: entidades (`TeamMember`, `MethodStage`…), reglas (`isPublishableMember`) y puertos (`TeamRepository`). No conoce Vue.
- **Aplicación**: casos de uso que orquestan el dominio (ordenar etapas, filtrar integrantes).
- **Infraestructura**: adaptadores concretos. Hoy leen archivos locales; mañana pueden leer un CMS o una API sin tocar dominio ni componentes.
- **Presentación**: Vue. Una **raíz de composición** (`di/container.ts`) crea las implementaciones y las entrega con `provide/inject` y `InjectionKey` tipadas.

Para un sitio de una sola página esto puede parecer mucho, pero permite cambiar la fuente de contenido (por ejemplo, a un CMS para que el equipo edite textos) cambiando una sola línea.

## 4. Configuración sin valores fijos

- **Tema como datos**: `theme.config.ts` guarda los tokens del manual de marca. Un plugin los aplana a variables CSS (`--zs-color-accent`, `--zs-space-8`…) al arrancar la app. Los estilos solo usan `var(--zs-…)`.
- **Tonos de superficie**: `.surface-dark` / `.surface-light` remapean roles (`--surface-text`, `--surface-accent`…), así un mismo componente funciona sobre navy o sobre claro sin variantes duplicadas.
- **Puntos de quiebre**: las media queries de CSS no aceptan variables, así que los layouts usan rejillas fluidas (`auto-fit` + `minmax`) y el único breakpoint (navegación) se lee desde TypeScript con `useMediaQuery`.
- **Constantes**: los valores que se repiten en 3 o más lugares viven en `shared/constants` (ids de sección, prefijo de variables, tonos de logo y superficie, esquema `mailto:`, sufijo de títulos).

## 5. Decisiones de diseño (manual de marca)

- Paleta navy medianoche + blanco + acento brisa; Poppins en titulares, Inter en texto.
- **Un solo momento orquestado**: al cargar, el titular "entra en foco" (de desenfocado a nítido, idea de *Sight*) mientras los anillos del símbolo se expanden como una onda (idea de *Zen*).
- El resto del movimiento es sobrio: la línea del método se dibuja al entrar en pantalla y los botones responden al cursor.
- Numeración solo en el método, porque es una secuencia real (ver → sostener).
- Accesibilidad: enlace "Saltar al contenido", foco visible, `aria-labelledby` en secciones, contraste AA y movimiento reducido respetado.

## Fuentes

- Motion for Vue: https://motion.dev/docs/vue
- Componente motion: https://motion.dev/docs/vue-motion-component
- MotionConfig: https://motion.dev/docs/vue-motion-config
- useReducedMotion: https://motion.dev/docs/vue-use-reduced-motion
- Estructura de proyectos Vue: https://vue-faq.org/en/development/project-structure.html
- Clean Architecture en Vue/Nuxt: https://dirodriguezm.gitlab.io/nuxt-clean-architecture.html
