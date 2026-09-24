import type { TeamMember } from '@/domain/entities'

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

const placeholderEducation = [
  { degree: '[Maestría o posgrado]', institution: '[Universidad]', year: 2020 },
  { degree: '[Licenciatura o ingeniería]', institution: '[Universidad]' },
]

const placeholderCompanies = ['[Empresa 1]', '[Empresa 2]', '[Empresa 3]']

const placeholderBio = '[Una o dos frases sobre su experiencia y lo que aporta al equipo.]'

export const teamMembers: readonly TeamMember[] = [
  {
    id: 'integrante-1',
    order: 1,
    name: '[Nombre Apellido]',
    role: '[Cargo]',
    bio: placeholderBio,
    education: placeholderEducation,
    companies: placeholderCompanies,
  },
  {
    id: 'integrante-2',
    order: 2,
    name: '[Nombre Apellido]',
    role: '[Cargo]',
    bio: placeholderBio,
    education: placeholderEducation,
    companies: placeholderCompanies,
  },
  {
    id: 'integrante-3',
    order: 3,
    name: '[Nombre Apellido]',
    role: '[Cargo]',
    bio: placeholderBio,
    education: placeholderEducation,
    companies: placeholderCompanies,
  },
]
