'use client'

import '@/styles/tailwind.css'

// This replaces the root layout, so it repeats the document shell and the font
// pipeline rather than importing them. It also deliberately renders no shared
// component: it is the screen that shows when the layout itself has thrown.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html
      lang="en"
      className="h-full bg-white antialiased"
      style={{
        // The root layout is what failed, so the font pipeline it sets up
        // cannot be assumed. Name a stack here instead of loading a webfont.
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <body className="flex h-full flex-col">
        <main className="flex flex-auto flex-col items-center justify-center px-4 py-20 text-center">
          <p className="text-sm font-medium text-gray-700">500</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-900 sm:text-3xl">
            This page could not load
          </h1>
          <p className="mt-4 max-w-md text-sm text-gray-700">
            Something failed before the page could be drawn. Reloading usually
            clears it.
          </p>
          {error.digest ? (
            <p className="mt-6 font-mono text-xs text-gray-500">
              Reference: {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={reset}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-base font-semibold text-white hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Reload the page
          </button>
        </main>
      </body>
    </html>
  )
}
