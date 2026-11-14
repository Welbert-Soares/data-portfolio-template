import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal } from '@/contents/personal'

const links = [
  { href: personal.social.github, label: 'GitHub', icon: FaGithub },
  { href: personal.social.linkedin, label: 'LinkedIn', icon: FaLinkedin },
].filter((link) => link.href)

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex gap-5 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-secondary transition-colors hover:text-primary"
          >
            <Icon aria-hidden="true" className="h-6 w-6" />
          </a>
        </li>
      ))}
    </ul>
  )
}
