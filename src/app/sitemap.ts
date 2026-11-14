import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

// Lista das páginas para o Google, em /sitemap.xml. Criou uma página nova? Adicione aqui.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return ['/', '/about', '/projects', '/contact'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }))
}
