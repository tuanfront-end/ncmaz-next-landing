import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoReact from '@/images/logos/reactjs.svg'
import logoTailwind from '@/images/logos/tailwind.svg'
import logoFigma from '@/images/logos/figma.svg'
import logoTypescript from '@/images/logos/typescript.svg'
import logoNextjs from '@/images/logos/nextjs.svg'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { buyNowLink, demoLink } from '@/constant'

export function Hero() {
  return (
    <Container className="overflow-hidden pt-16 pb-16 text-center sm:pt-20 lg:pt-24 2xl:pt-28">
      <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-1.5 text-sm font-medium ring-1 ring-gray-500/10 ring-inset">
        <SparklesIcon className="-ml-1.5 size-5 text-indigo-500" />
        <span className="text-gray-700">Big update 2.0 has arrived!</span>
      </div>
      <h1 className="mx-auto mt-2 max-w-3xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl lg:max-w-4xl">
        Next.js template for{' '}
        <span className="relative text-indigo-600 lg:whitespace-nowrap">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-1/2 left-0 h-[0.58em] w-full fill-indigo-300/70 lg:top-2/3"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">blog, news & magazine</span>
        </span>
      </h1>
      <p className="mx-auto mt-12 max-w-3xl text-xl tracking-tight text-slate-700">
        Ncmaz is a modern, clean, premium designed and fully responsive Next.js
        template for blog, news and magazine websites.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-x-5">
        <Button href={demoLink} target="_blank">
          View demo
          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </Button>
        <Button
          href={buyNowLink}
          variant="outline"
          className="sm:px-7"
          target="_blank"
        >
          Buy now
        </Button>
      </div>
      <div className="mt-32 2xl:mt-36">
        <p className="font-display text-base text-slate-900">
          Built on the most modern technologies
        </p>
        <ul
          role="list"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-10 xl:gap-x-12"
        >
          {[
            { name: 'Figma', logo: logoFigma },
            { name: 'React', logo: logoReact },
            { name: 'Next.js', logo: logoNextjs },
            { name: 'Tailwind', logo: logoTailwind },
            { name: 'Typescript', logo: logoTypescript },
          ].map((company) => (
            <li key={company.name} className="flex">
              <Image
                src={company.logo}
                alt={company.name}
                unoptimized
                className="w-6 object-contain sm:size-8"
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
