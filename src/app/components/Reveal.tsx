'use client'

import { m } from 'framer-motion'

/**
 * A única animação de scroll do site: o conteúdo sobe 16px e aparece quando entra na tela, uma
 * vez só. Envolva qualquer bloco com <Reveal> e, para escalonar itens de uma lista, passe um
 * `delay` pequeno (ex.: index * 0.08).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  )
}
