import { personal } from '@/contents/personal'
import type { ColorName } from '@/types'

/**
 * Tons de cada cor que dá para escolher em personal.ts (`color`). Os valores são os da paleta do
 * Tailwind e foram escolhidos pelo contraste: texto em destaque usa o 700 no tema claro e o 400 no
 * escuro, e os botões usam o 700 com texto branco; todos passam de 4,5:1.
 *
 * Quer uma cor nova? Adicione o nome em `ColorName` (src/types/index.ts) e os tons aqui.
 */
export const palettes: Record<
  ColorName,
  { 300: string; 400: string; 700: string; 800: string; 950: string }
> = {
  verde: { 300: '#6ee7b7', 400: '#34d399', 700: '#047857', 800: '#065f46', 950: '#022c22' },
  azul: { 300: '#93c5fd', 400: '#60a5fa', 700: '#1d4ed8', 800: '#1e40af', 950: '#172554' },
  roxo: { 300: '#c4b5fd', 400: '#a78bfa', 700: '#6d28d9', 800: '#5b21b6', 950: '#2e1065' },
  rosa: { 300: '#fda4af', 400: '#fb7185', 700: '#be123c', 800: '#9f1239', 950: '#4c0519' },
  laranja: { 300: '#fdba74', 400: '#fb923c', 700: '#c2410c', 800: '#9a3412', 950: '#431407' },
  cinza: { 300: '#cbd5e1', 400: '#94a3b8', 700: '#334155', 800: '#1e293b', 950: '#020617' },
}

export const palette = palettes[personal.color]

/** Variáveis CSS aplicadas no <html> (layout.tsx); globals.css monta as cores do site com elas. */
export const paletteStyle = {
  '--p-400': palette[400],
  '--p-700': palette[700],
  '--p-800': palette[800],
} as React.CSSProperties
