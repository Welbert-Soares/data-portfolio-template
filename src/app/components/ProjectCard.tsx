import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import type { Project } from '@/types'
import Lottie from './Lottie'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-800/40">
      {project.image.endsWith('.json') ? (
        // A animação fica em posição absoluta: assim o SVG não estica a caixa além de 16:9.
        <div className="relative aspect-video w-full bg-primary/5">
          <Lottie src={project.image} className="absolute inset-3" />
        </div>
      ) : (
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          width={1200}
          height={675}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-video w-full object-cover"
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <ul aria-label="Tecnologias" className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-stronger dark:text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.demoUrl || project.githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm"
              >
                <FaExternalLinkAlt aria-hidden="true" className="h-3 w-3" />
                Ver projeto
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-sm"
              >
                <FaGithub aria-hidden="true" className="h-4 w-4" />
                Código
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
