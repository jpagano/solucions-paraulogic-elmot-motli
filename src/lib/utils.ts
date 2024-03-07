import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateNow = new Intl.DateTimeFormat('ca-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(Date.now()));

export function theSolutionTitle(game: string) {
  return `Solució del joc "${game}" del dia ${dateNow}`;
}

export function theSolutionDescription(game: string, solution: string) {
  return `La solució d'avui del joc "${game}" del dia ${dateNow} es la paraula «${solution.toUpperCase()}»`;
}
