import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { personal } from '@/contents/personal'
import { projects } from '@/contents/projects'
import Lottie from './components/Lottie'
import ProjectCard from './components/ProjectCard'
import Reveal from './components/Reveal'
import SocialLinks from './components/SocialLinks'

const featured = projects.filter((project) => project.featured)

export default function Home() {
  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="container grid items-center gap-12 py-16 md:grid-cols-2 md:py-28"
      >
        <Reveal className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="font-medium text-primary">{personal.role}</p>
          <h1
            id="hero-title"
            className="mt-2 text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            {personal.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300">
            {personal.summary}
          </p>

          <ul aria-label="Principais ferramentas" className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
            {personal.highlightSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium dark:border-gray-700"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="btn btn-primary">
              Ver projetos
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Entrar em contato
            </Link>
          </div>
          <SocialLinks className="mt-8" />
        </Reveal>

        {/* Ilustração da home: troque o arquivo em public/animations/ ou apague este bloco. */}
        <Reveal delay={0.1}>
          <Lottie src="/animations/home-dados.json" className="mx-auto aspect-[898/770] w-full max-w-lg" />
        </Reveal>
      </section>

      {featured.length > 0 && (
        <section
          aria-labelledby="featured-title"
          className="border-t border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900/50"
        >
          <div className="container">
            <Reveal>
              <h2 id="featured-title" className="section-title">
                Projetos em destaque
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-8 md:grid-cols-2">
              {featured.map((project, i) => (
                <li key={project.title}>
                  <Reveal delay={i * 0.08} className="h-full">
                    <ProjectCard project={project} />
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal className="mt-10 text-center">
              <Link href="/projects" className="btn btn-outline">
                Todos os projetos
                <FaArrowRight aria-hidden="true" className="h-3 w-3" />
              </Link>
            </Reveal>
          </div>
        </section>
      )}
    </>
  )
}
