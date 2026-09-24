<<<<<<< HEAD
# ZenSight Consulting — Landing page

Landing page de **zensightconsulting.com**, construida con Vue 3 + TypeScript, Motion for Vue (`motion-v`), Atomic Design y una arquitectura limpia (Clean Architecture). Colores, tipografía y reglas visuales vienen del manual de marca de ZenSight.

## Requisitos

- Node.js 20.19 o superior
- npm 10 o superior

## Comandos

```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run typecheck  # revisión de tipos con vue-tsc
npm run build      # typecheck + build de producción en dist/
npm run preview    # sirve el build localmente
```

## Qué editar para cada cambio

| Quiero cambiar… | Archivo |
| --- | --- |
| Colores, tipografía, espacios, radios, medidas | `src/config/theme.config.ts` |
| Duraciones, curvas y distancias de las animaciones | `src/config/motion.config.ts` |
| Dominio, correo de contacto, metadatos, fuentes, logotipos | `src/config/site.config.ts` |
| Textos de la página (hero, método, misión, etc.) | `src/infrastructure/data/landing.content.ts` |
| Integrantes del equipo | `src/infrastructure/data/team.data.ts` |
| Valores compartidos (ids de sección, prefijos…) | `src/shared/constants/index.ts` |

### Agregar integrantes del equipo

1. Guarda la foto en `src/assets/team/` (cuadrada, mínimo 400 × 400 px).
2. En `src/infrastructure/data/team.data.ts` importa la foto y rellena un bloque:

```ts
import ana from '@/assets/team/ana.jpg'

export const teamMembers: readonly TeamMember[] = [
  {
    id: 'ana-lopez',
    order: 1,
    name: 'Ana López',
    role: 'Consultora de procesos',
    bio: 'Diez años ordenando operaciones de pymes de manufactura y servicios.',
    photoUrl: ana,
    education: [
      { degree: 'Maestría en Administración', institution: 'Universidad X', year: 2018 },
      { degree: 'Ingeniería Industrial', institution: 'Universidad Y' },
    ],
    companies: ['Empresa A', 'Empresa B'],
    linkedinUrl: 'https://www.linkedin.com/in/…',
  },
]
```

Sin `photoUrl` se muestran las iniciales. Si `education` o `companies` están vacíos, ese bloque no aparece en la tarjeta. Un integrante sin nombre o sin cargo no se publica (regla de dominio en `TeamMember.ts`). Si la lista queda vacía, la sección muestra un mensaje en lugar de la rejilla.

## Arquitectura

La explicación completa está en [`docs/ARQUITECTURA.md`](docs/ARQUITECTURA.md), y la investigación previa en [`docs/INVESTIGACION.md`](docs/INVESTIGACION.md).

```
src/
├── config/            Configuración: tema, animación y sitio (sin lógica)
├── shared/            Constantes y utilidades puras, sin dependencias de capas
├── domain/            Entidades, reglas y puertos (interfaces de repositorio)
├── application/       Casos de uso (GetLandingContent, GetTeamMembers)
├── infrastructure/    Adaptadores: datos locales y repositorios concretos
└── presentation/      Vue: DI, plugin de tema, composables, estilos y componentes
    └── components/
        ├── atoms/       Botón, título, texto, logo, avatar, anillos…
        ├── molecules/   Navegación, paso del método, tarjeta de integrante…
        ├── organisms/   Header, hero, secciones y footer
        ├── templates/   Estructura de la landing (header / main / footer)
        └── pages/       LandingPage: conecta casos de uso con la plantilla
```

Regla de dependencias: `presentation → application → domain`. `infrastructure` implementa los puertos del dominio y solo `presentation/di/container.ts` conoce las implementaciones concretas.

## Pendientes antes de publicar

- Reemplazar los integrantes de ejemplo en `team.data.ts`.
- Si es posible, sustituir los PNG de `src/assets/brand/` por el logotipo en SVG.
=======
# landing-page
>>>>>>> origin/main
