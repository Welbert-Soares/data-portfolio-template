import { personal } from '@/contents/personal'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-secondary">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
