import Link from 'next/link'
import Lottie from './components/Lottie'

export default function NotFound() {
  return (
    <div className="container max-w-2xl py-16 text-center">
      <Lottie src="/animations/404.json" className="mx-auto aspect-[950/847] w-full max-w-sm" />
      <h1 className="mb-4 mt-6 text-4xl font-bold">Página não encontrada</h1>
      <p className="mb-8 text-secondary">A página que você procura não existe ou mudou de endereço.</p>
      <Link href="/" className="btn btn-primary">
        Voltar ao início
      </Link>
    </div>
  )
}
