/** Formación académica de un integrante. */
export interface Education {
  readonly degree: string
  readonly institution: string
  /** Año de egreso (opcional). */
  readonly year?: number
}

/** Integrante del equipo de ZenSight. */
export interface TeamMember {
  readonly id: string
  /** Posición en la sección de equipo (menor = primero). */
  readonly order: number
  readonly name: string
  readonly role: string
  readonly bio: string
  /** URL o import de la fotografía. Si falta, se muestran sus iniciales. */
  readonly photoUrl?: string
  /** Estudios, del más reciente al más antiguo. */
  readonly education: readonly Education[]
  /** Empresas con las que ha trabajado (como colaborador o consultor). */
  readonly companies: readonly string[]
  readonly linkedinUrl?: string
}

/** Un integrante está listo para publicarse si tiene nombre y cargo. */
export const isPublishableMember = (member: TeamMember): boolean =>
  member.name.trim().length > 0 && member.role.trim().length > 0
