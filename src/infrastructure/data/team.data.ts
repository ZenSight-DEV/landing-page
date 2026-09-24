import type { TeamMember } from '@/domain/entities'
import cristian from '@/assets/team/cristian.jpg'
import nico from '@/assets/team/nico.jpg'
import angel from '@/assets/team/angel.jpg'

/**
 * Integrantes del equipo.
 *
 * Para agregar a alguien, copia un bloque y rellena sus datos.
 * - `photoUrl` (opcional): importa la foto desde `src/assets/team/`
 *   (p. ej. `import ana from '@/assets/team/ana.jpg'`) y asígnala aquí.
 *   Sin foto se muestran sus iniciales.
 * - `education`: estudios, del más reciente al más antiguo. `year` es opcional.
 * - `companies`: empresas con las que tiene experiencia. Déjalo vacío (`[]`)
 *   si no aplica; la sección se oculta sola.
 * - `linkedinUrl` (opcional).
 * - Los integrantes sin nombre o sin cargo no se publican.
 */

const cristianEducation = [
  { degree: 'Ingeniería en Sistemas Computacionales', institution: 'Tecnológico de Monterrey', year: 2026 },
  { degree: 'Concentración en Ciencia de datos e Inteligencia Artificial Avanzada', institution: 'Tecnológico de Monterrey', year: 2026 },
]

const angelEducation = [
  { degree: 'Ingeniería en Sistemas Computacionales', institution: 'Tecnológico de Monterrey', year: 2026 },
  { degree: 'Concentración en Ciencia de datos e Inteligencia Artificial Avanzada', institution: 'Tecnológico de Monterrey', year: 2026 },
]

const nicoEducation = [
  { degree: 'Ingeniería en Sistemas Computacionales', institution: 'Tecnológico de Monterrey', year: 2026 },
]

const cristianCompanies = ['Microsoft']

const angelCompanies = ['Microsoft', 'Inverkids']

const cristianBio = 'Cristian es un apasionado de la tecnología y la innovación, con experiencia en desarrollo de software y liderazgo de equipos. Su enfoque está en crear soluciones eficientes y escalables.'

const angelBio = 'Angel es un experto en arquitectura de software y diseño de sistemas, con un fuerte enfoque en la calidad y la sostenibilidad de las soluciones que desarrolla.'

const nicoBio = 'Nicolas es un Product Owner con experiencia en gestión de proyectos y desarrollo de productos digitales, enfocado en entregar valor a los clientes y mejorar continuamente los procesos del equipo.'

export const teamMembers: readonly TeamMember[] = [
  {
    id: 'integrante-1',
    order: 1,
    name: 'Cristian Chávez',
    photoUrl: cristian,
    role: 'Team Lead',
    bio: cristianBio,
    education: cristianEducation,
    companies: cristianCompanies,
  },
  {
    id: 'integrante-2',
    order: 2,
    name: 'Nicolas Hood',
    photoUrl: nico,
    role: 'Product Owner',
    bio: nicoBio,
    education: nicoEducation,
    companies: [],
  },
  {
    id: 'integrante-3',
    order: 3,
    name: 'Angel Ramírez',
    photoUrl: angel,
    role: 'Architecture Owner',
    bio: angelBio,
    education: angelEducation,
    companies: angelCompanies,
  },
]
