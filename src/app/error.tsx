'use client'

import Link from 'next/link'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div role="alert" className="container max-w-2xl py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold">Algo deu errado</h1>
      <p className="mb-8 text-secondary">Não foi possível carregar esta página.</p>
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={reset} className="btn btn-primary">
          Tentar de novo
        </button>
        <Link href="/" className="btn btn-outline">
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
