import { type Metadata, type Viewport } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import { siteUrl } from '@/constant'
import '@/styles/tailwind.css'

const title = 'Ncmaz - Blog, News, Magazine Next.js & Tailwind CSS template'
const description =
  'Ncmaz | Blog, News, Magazine Next.js & Tailwind CSS template – A responsive Next.js template designed for blog, news and magazine websites. Ncmaz is built with the latest Next.js 16 (app directory), TypeScript, and Tailwind CSS 4.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Ncmaz',
    default: title,
  },
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Ncmaz',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased motion-safe:scroll-smooth',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {/* Visible only once it takes focus, so it costs the design nothing
            and saves a keyboard user the whole header. Every route's <main>
            carries the matching id. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-slate-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
