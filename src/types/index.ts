/** Cores que dá para escolher em personal.ts. Os tons de cada uma ficam em src/lib/theme.ts. */
export type ColorName = 'verde' | 'azul' | 'roxo' | 'rosa' | 'laranja' | 'cinza'

export interface Personal {
  name: string
  role: string
  summary: string
  color: ColorName
  photo: string
  location: string
  email: string
  social: { github: string; linkedin: string }
  highlightSkills: string[]
  siteUrl: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  /**
   * Capa do projeto, em public/: um print ('/projects/meu-projeto.png', de preferência 16:9) ou
   * uma animação Lottie ('/animations/projeto-1.json').
   */
  image: string
  /** Código do projeto. Sem ele, o botão "Código" não aparece. */
  githubUrl?: string
  /** Projeto publicado: site, dashboard, notebook. Sem ele, o botão "Ver projeto" não aparece. */
  demoUrl?: string
  /** Também aparece na página inicial. */
  featured?: boolean
}
