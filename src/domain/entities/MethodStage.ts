import type { Service } from './Service'

/** Etapa del Método ZenSight: ver, ordenar, medir, habilitar, sostener. */
export interface MethodStage {
  readonly id: string
  readonly order: number
  readonly name: string
  readonly summary: string
  readonly services: readonly Service[]
}
