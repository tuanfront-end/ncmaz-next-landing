import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { NavLink } from '@/components/NavLink'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { buyNowLink, changelogLink, demoLink } from '@/constant'

export function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            {/* This is the only content route, so prefetching it from itself
                just refetches the current page. */}
            <Link href="/" prefetch={false} aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-3">
              <NavLink href="#demos">Demo pages</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink target="_blank" href={changelogLink}>
                Changelog
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-2 md:gap-x-6">
            <div className="hidden md:block">
              <NavLink target="_blank" href={buyNowLink}>
                Buy now
              </NavLink>
            </div>
            <Button
              href={demoLink}
              color="blue"
              className="px-4! py-2! text-sm!"
              target="_blank"
            >
              View demo
              <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation
                buyNowLink={buyNowLink}
                changelogLink={changelogLink}
              />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
