import type { Metadata } from 'next'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { personal } from '@/contents/personal'
import ContactForm from './ContactForm'
import { contactFormEnabled } from './emailjs'
import Lottie from '../components/Lottie'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'

export const metadata: Metadata = {
  title: 'Contato',
  description: `Fale com ${personal.name} sobre vagas, projetos ou parcerias.`,
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <div className="container py-16 md:py-24">
      <Reveal>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Contato</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Vagas, projetos ou uma conversa sobre dados: escreva por e-mail.
        </p>
      </Reveal>

      <div className="mt-12 grid items-start gap-12 md:grid-cols-2">
        <Reveal className="space-y-6">
          {/* Com o formulário ligado, a ilustração fica acima dos contatos; sem ele, ao lado. */}
          {contactFormEnabled && (
            <Lottie src="/animations/contato.json" className="aspect-[830/568] w-full max-w-sm" />
          )}
          <a href={`mailto:${personal.email}`} className="flex items-center gap-4 hover:text-primary">
            <FaEnvelope aria-hidden="true" className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium">{personal.email}</span>
          </a>
          <p className="flex items-center gap-4">
            <FaMapMarkerAlt aria-hidden="true" className="h-6 w-6 text-primary" />
            <span className="text-lg">{personal.location}</span>
          </p>
          <SocialLinks />
        </Reveal>

        <Reveal delay={0.08}>
          {contactFormEnabled ? (
            <ContactForm />
          ) : (
            <Lottie src="/animations/contato.json" className="mx-auto aspect-[830/568] w-full max-w-lg" />
          )}
        </Reveal>
      </div>
    </div>
  )
}
