'use client'

import { HiMoon, HiSun } from 'react-icons/hi2'

/**
 * Alterna entre claro e escuro e guarda a escolha. O tema inicial já foi aplicado antes do React
 * carregar (script em layout.tsx), por isso os dois ícones vão no HTML e o CSS mostra o certo:
 * nada aqui depende de saber o tema no servidor.
 */
export default function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {
      // Navegação privada pode bloquear o localStorage; o tema só não fica salvo.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={withLabel ? undefined : 'Alternar entre tema claro e escuro'}
      className="flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <HiSun aria-hidden="true" className="hidden h-5 w-5 text-yellow-500 dark:block" />
      <HiMoon aria-hidden="true" className="h-5 w-5 text-blue-500 dark:hidden" />
      {withLabel && (
        <>
          <span className="hidden dark:inline">Tema claro</span>
          <span className="dark:hidden">Tema escuro</span>
        </>
      )}
    </button>
  )
}
