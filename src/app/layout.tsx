import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import MotionProvider from './components/MotionProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { personal } from '@/contents/personal'
import { siteUrl } from '@/lib/site'
import { paletteStyle } from '@/lib/theme'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

// Opcional: ID do Google Analytics 4. Sem a variável, nenhum script do Google é carregado.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const title = `${personal.name} • ${personal.role}`

// Título, descrição e prévia do link (Open Graph) saem de src/contents/personal.ts.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s • ${personal.name}` },
  description: personal.summary,
  authors: [{ name: personal.name }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: title,
    title,
    description: personal.summary,
    // A imagem 1200x630 é gerada por src/app/opengraph-image.tsx.
  },
  twitter: { card: 'summary_large_image', title, description: personal.summary },
}

// Aplica o tema escuro antes da página aparecer, para não piscar branco no primeiro carregamento.
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) document.documentElement.classList.add('dark');
  } catch (_) {}
})();
`

// Dados estruturados: ajudam o Google a entender que o site é sobre uma pessoa.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personal.name,
  url: siteUrl,
  jobTitle: personal.role,
  description: personal.summary,
  sameAs: Object.values(personal.social).filter(Boolean),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" style={paletteStyle} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary-strong focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
