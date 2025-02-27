import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

interface NavLinksProps {
  className?: string
  onLinkClick?: () => void
}

export function NavLinks({ className, onLinkClick }: NavLinksProps) {
  return (
    <nav className={cn('flex items-center space-x-4', className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'text-sm font-medium transition-colors hover:text-primary',
            className?.includes('flex-col') ? 'w-full' : ''
          )}
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}