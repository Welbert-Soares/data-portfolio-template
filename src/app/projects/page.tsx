import type { Metadata } from 'next'
import { personal } from '@/contents/personal'
import { projects } from '@/contents/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

export const metadata: Metadata = {
  title: 'Projetos',
  description: `Projetos de ${personal.name}: ${projects.map((p) => p.title).join(', ')}.`,
  alternates: { canonical: '/projects' },
}

export default function Projects() {
  return (
    <div className="container py-16 md:py-24">
      <Reveal>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Projetos</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          O problema de cada um, o que eu fiz e com quais ferramentas.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={(i % 2) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  )
}
