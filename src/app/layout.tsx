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
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
