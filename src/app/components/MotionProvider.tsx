'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'

/**
 * Carrega o Framer Motion de forma enxuta (por isso os componentes usam `m.div`, não
 * `motion.div`) e desliga os movimentos para quem ativou "reduzir movimento" no sistema.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
