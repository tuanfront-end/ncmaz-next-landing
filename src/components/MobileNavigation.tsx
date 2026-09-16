'use client'
import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

function MobileNavLink({
  href,
  children,
  target,
}: {
  href: string
  children: React.ReactNode
  target?: string
}) {
  return (
    <PopoverButton
      as={Link}
      href={href}
      className="block w-full p-2"
      target={target}
    >
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition motion-reduce:transition-none',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition motion-reduce:transition-none',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

// The links arrive as props so that `@/constant` stays a server module. Import
// it here and every value in it would be serialised into the client bundle.
export function MobileNavigation({
  buyNowLink,
  changelogLink,
}: {
  buyNowLink: string
  changelogLink: string
}) {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in motion-reduce:transition-none motion-reduce:duration-0"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in motion-reduce:transition-none motion-reduce:duration-0"
      >
        <MobileNavLink href="#demos">Pre-built demos</MobileNavLink>
        <MobileNavLink href="#features">Features</MobileNavLink>
        <MobileNavLink href={changelogLink} target="_blank">
          Changelog
        </MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink href={buyNowLink} target="_blank">
          Buy now
        </MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}
