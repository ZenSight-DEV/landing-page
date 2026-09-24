/** Servicio que ofrece ZenSight. */
export interface Service {
  readonly id: string
  readonly name: string
  readonly description: string
  /** Etiqueta opcional para destacarlo (p. ej. "Nuevo"). */
  readonly tag?: string
}
