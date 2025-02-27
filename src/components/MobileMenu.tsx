'use client'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { NavLinks } from './NavLinks'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
      <SheetTitle className='flex justify-center'>Menu</SheetTitle>
        <div className="flex flex-col space-y-4 pt-6">
          <NavLinks
            className="flex-col space-y-2"
            onLinkClick={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}