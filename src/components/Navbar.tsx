'use client'
import Link from 'next/link'
import { NavLinks } from './NavLinks'
import { MobileMenu } from './MobileMenu'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold">
            Dream Homes
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLinks />
          <Button asChild>
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}