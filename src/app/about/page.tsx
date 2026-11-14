import type { Metadata } from 'next'
import Image from 'next/image'
import { FaDownload } from 'react-icons/fa'
import { personal } from '@/contents/personal'
import { formatPeriod, resume } from '@/contents/resume'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'

export const metadata: Metadata = {
  title: 'Sobre',
  description: `Currículo de ${personal.name}, ${personal.role}: experiência, ferramentas e formação.`,
  alternates: { canonical: '/about' },
}

const row = 'grid gap-2 py-6 md:grid-cols-[1fr_2fr] md:gap-12'

export default function About() {
  return (
    <div className="container py-16 md:py-24">
      <Reveal className="flex flex-col gap-8 md:flex-row md:items-center">
        <Image
          src={personal.photo}
          alt={`Foto de ${personal.name}`}
          width={128}
          height={128}
          priority
          className="h-28 w-28 rounded-full object-cover ring-4 ring-primary/20"
        />
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">{personal.name}</h1>
          <p className="mt-2 text-xl font-medium text-primary">{personal.role}</p>
          <p className="mt-1 text-gray-600 dark:text-gray-400">{personal.location}</p>
        </div>
      </Reveal>

      <Reveal className="mt-8 max-w-3xl">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{personal.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          {resume.pdf && (
            <a href={resume.pdf} download className="btn btn-primary">
              <FaDownload aria-hidden="true" className="h-4 w-4" />
              Baixar currículo
            </a>
          )}
          <SocialLinks />
        </div>
      </Reveal>

      <section aria-labelledby="experience-title" className="mt-20">
        <Reveal>
          <h2 id="experience-title" className="section-title">
            Experiência
          </h2>
        </Reveal>
        <ol className="mt-10 space-y-12 border-l border-gray-200 dark:border-gray-800">
          {resume.experience.map((job) => (
            <li key={`${job.company}-${job.start}`} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[6px] top-2 h-[11px] w-[11px] rounded-full border-2 border-primary bg-white dark:bg-gray-900"
              />
              <Reveal>
                <h3 className="text-xl font-semibold">
                  {job.title} · <span className="text-primary">{job.company}</span>
                </h3>
                <p className="mt-1 text-sm text-gray-600 tabular-nums dark:text-gray-400">
                  {formatPeriod(job)}
                </p>
                <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-gray-700 marker:text-primary dark:text-gray-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="skills-title" className="mt-20">
        <Reveal>
          <h2 id="skills-title" className="section-title">
            Ferramentas
          </h2>
        </Reveal>
        <Reveal>
          <dl className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {resume.skills.map((group) => (
              <div key={group.name} className={row}>
                <dt className="font-semibold">{group.name}</dt>
                <dd className="text-gray-700 dark:text-gray-300">{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section aria-labelledby="education-title" className="mt-20">
        <Reveal>
          <h2 id="education-title" className="section-title">
            Formação
          </h2>
        </Reveal>
        <Reveal>
          <dl className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {resume.education.map((item) => (
              <div key={item.course} className={row}>
                <dt className="font-semibold">{item.school}</dt>
                <dd className="text-gray-700 dark:text-gray-300">
                  {item.course}, {formatPeriod(item)}
                </dd>
              </div>
            ))}
            {resume.certifications.length > 0 && (
              <div className={row}>
                <dt className="font-semibold">Certificações</dt>
                <dd>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    {resume.certifications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
            {resume.languages.length > 0 && (
              <div className={row}>
                <dt className="font-semibold">Idiomas</dt>
                <dd className="text-gray-700 dark:text-gray-300">{resume.languages.join(', ')}</dd>
              </div>
            )}
          </dl>
        </Reveal>
      </section>
    </div>
  )
}
