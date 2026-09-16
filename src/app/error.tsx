'use client'

import Link from 'next/link'

import { Logo } from '@/components/Logo'

// Deliberately self-contained. An error boundary is client code that every
// route carries whether or not it ever renders, so this one reaches for no
// shared component that would drag next/image and its background photo onto
// the floor of the whole site. The 404 keeps the split layout; it is a server
// component and pays nothing.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex flex-auto flex-col items-center justify-center px-4 py-20 text-center">
      <Link href="/" aria-label="Home">
        <Logo className="h-10 w-auto" />
      </Link>
      <p className="mt-20 text-sm font-medium text-gray-700">500</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-sm text-gray-700">
        This page ran into an error it could not recover from. Try loading it
        again — if it keeps happening, the demo is still one click away.
      </p>
      {error.digest ? (
        <p className="mt-6 font-mono text-xs text-gray-500">
          Reference: {error.digest}
        </p>
      ) : null}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-base font-semibold text-white hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-base font-medium text-slate-700 ring-1 ring-slate-200 hover:text-slate-900 hover:ring-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
      </div>
    </main>
  )
}
