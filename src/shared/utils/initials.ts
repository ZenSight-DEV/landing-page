/** Iniciales de un nombre, para el avatar cuando no hay fotografía. */
export const getInitials = (fullName: string, maxLetters: number): string =>
  fullName
    .replace(/[^\p{L}\s]/gu, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, maxLetters)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
