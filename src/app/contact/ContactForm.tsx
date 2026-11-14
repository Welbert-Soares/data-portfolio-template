'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from './emailjs'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-800'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    const { serviceId, templateId, publicKey } = emailjsConfig
    setStatus('sending')
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      formRef.current.reset()
      setStatus('sent')
    } catch (error) {
      console.error('EmailJS:', error)
      setStatus('error')
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="space-y-5 rounded-xl border border-gray-200 p-6 dark:border-gray-800"
    >
      {/* Os nomes dos campos (name, email, message) precisam ser os mesmos do template no EmailJS. */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Nome
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          E-mail
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Mensagem
        </label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full">
        {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
      </button>

      <p role="status" aria-live="polite" className="min-h-6 text-center text-sm">
        {status === 'sent' && (
          <span className="text-emerald-600 dark:text-emerald-400">Mensagem enviada. Obrigado!</span>
        )}
        {status === 'error' && (
          <span className="text-red-600 dark:text-red-400">
            Não foi possível enviar. Tente de novo ou escreva direto para o e-mail ao lado.
          </span>
        )}
      </p>
    </form>
  )
}
