'use client'

import Link from 'next/link'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">500</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Something went wrong
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        This page ran into an error it could not recover from. Try loading it
        again — if it keeps happening, the demo is still one click away.
      </p>
      {error.digest ? (
        <p className="mt-6 font-mono text-xs text-gray-500">
          Reference: {error.digest}
        </p>
      ) : null}
      <div className="mt-10 flex flex-wrap gap-4">
        <Button onClick={reset}>Try again</Button>
        <Button href="/" variant="outline">
          Go back home
        </Button>
      </div>
    </SlimLayout>
  )
}
