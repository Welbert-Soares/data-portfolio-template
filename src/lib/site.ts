import { personal } from '@/contents/personal'

/**
 * Endereço público do site, usado no sitemap, no Google e na prévia do link.
 * Ordem: o `siteUrl` de personal.ts (se preenchido) → o endereço que a Vercel informa no build →
 * localhost, no seu computador.
 */
export const siteUrl = (
  personal.siteUrl ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '')
