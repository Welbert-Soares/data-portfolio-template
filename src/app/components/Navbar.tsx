'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { personal } from '@/contents/personal'
import ThemeToggle from './ThemeToggle'

const menuItems = [
  { href: '/', label: 'Início' },
  { href: '/about', label: 'Sobre' },
  { href: '/projects', label: 'Projetos' },
  { href: '/contact', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  // Menu do celular: fecha com Esc, com clique fora e ao trocar de página.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  const linkClass = (href: string) =>
    `font-medium transition-colors hover:text-primary ${
      isActive(href) ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
    }`

  return (
    <nav
      ref={navRef}
      aria-label="Principal"
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur dark:border-gray-800/60 dark:bg-gray-900/80"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {personal.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-md p-2 transition-colors hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
        >
          {open ? (
            <HiXMark aria-hidden="true" className="h-6 w-6" />
          ) : (
            <HiBars3 aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="container space-y-1 pb-4 md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`block py-2 ${linkClass(item.href)}`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle withLabel />
        </div>
      )}
    </nav>
  )
}
