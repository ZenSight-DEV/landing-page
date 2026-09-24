import { inject, onMounted, shallowRef, type InjectionKey, type ShallowRef } from 'vue'

interface Executable<T> {
  execute(): Promise<T>
}

/** Resuelve un caso de uso inyectado y expone su resultado de forma reactiva. */
export const useUseCase = <T>(key: InjectionKey<Executable<T>>): ShallowRef<T | null> => {
  const useCase = inject(key)
  if (!useCase) throw new Error(`Dependencia no registrada: ${String(key.description)}`)

  const result = shallowRef<T | null>(null)
  onMounted(async () => {
    result.value = await useCase.execute()
  })
  return result
}
