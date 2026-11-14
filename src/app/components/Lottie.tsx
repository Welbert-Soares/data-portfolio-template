'use client'

import { useEffect, useRef } from 'react'

/**
 * Toca uma animação Lottie (.json) de public/. O player (lottie-web, versão light) só é baixado
 * pelo navegador nas páginas que têm animação, e a animação só roda enquanto está na tela.
 * Para quem ativou "reduzir movimento" no sistema, mostra um quadro parado.
 *
 * Para trocar uma animação, baixe outro .json (por exemplo, em lottiefiles.com/free-animations)
 * para public/animations/ e mude o `src`.
 */
export default function Lottie({
  src,
  label,
  className = '',
}: {
  /** Caminho do .json em public/, como '/animations/404.json'. */
  src: string
  /** Descrição para leitores de tela. Sem ela, a animação é tratada como decorativa. */
  label?: string
  className?: string
}) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = container.current
    if (!el) return
    let cancelled = false
    let cleanup = () => {}

    import('lottie-web/build/player/lottie_light').then(({ default: lottie }) => {
      if (cancelled) return
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const animation = lottie.loadAnimation({
        container: el,
        renderer: 'svg',
        path: src,
        loop: true,
        autoplay: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
      })

      if (reduceMotion) {
        // Um quadro do meio costuma mostrar a ilustração completa.
        animation.addEventListener('DOMLoaded', () =>
          animation.goToAndStop(animation.totalFrames / 2, true),
        )
        cleanup = () => animation.destroy()
        return
      }

      const observer = new IntersectionObserver(([entry]) =>
        entry.isIntersecting ? animation.play() : animation.pause(),
      )
      observer.observe(el)
      cleanup = () => {
        observer.disconnect()
        animation.destroy()
      }
    })

    return () => {
      cancelled = true
      cleanup()
    }
  }, [src])

  return (
    <div
      ref={container}
      className={className}
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    />
  )
}
