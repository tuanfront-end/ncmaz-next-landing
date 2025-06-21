import Image from 'next/image'
import { Container } from '@/components/Container'
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'
import home1Img from '@/images/home/home-1.png'
import home2Img from '@/images/home/home-2.png'
import home3Img from '@/images/home/home-3.png'
import home4Img from '@/images/home/home-4.png'
import home5Img from '@/images/home/home-5.png'
import submissionImg from '@/images/home/submission.png'
import Link from 'next/link'
import { Button } from './Button'
import { demoLink } from '@/constant'

const homeDemos = [
  {
    img: home1Img,
    text: 'Home page 1',
    link: 'https://ncmaz-nextjs.vercel.app/',
  },
  {
    img: home2Img,
    text: 'Home page 2',
    link: 'https://ncmaz-nextjs.vercel.app/home-2',
  },
  {
    img: home3Img,
    text: 'Home page 3',
    link: 'https://ncmaz-nextjs.vercel.app/home-3',
  },
  {
    img: home4Img,
    text: 'Home page 4',
    link: 'https://ncmaz-nextjs.vercel.app/home-4',
  },

  {
    img: home5Img,
    text: 'Home page 5',
    link: 'https://ncmaz-nextjs.vercel.app/home-5',
  },
  {
    img: submissionImg,
    text: 'Submission page',
    link: 'https://ncmaz-nextjs.vercel.app/submission',
  },
]

export function SectionShowcase() {
  return (
    <section className="relative bg-slate-50 pt-20 pb-28 sm:py-32" id="demos">
      <svg
        aria-hidden="true"
        className="absolute inset-0 right-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-black opacity-70"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Explore pre-built home pages.
          </h2>
          <p className="mt-6 text-xl tracking-tight">
            Full suite of pages for blog, news, magazine, and blog websites.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {homeDemos.map((item, index) => (
            <div key={index} className="group relative flex flex-col">
              <div className="relative aspect-14/16 w-full overflow-hidden rounded-3xl border-8 border-indigo-100">
                <Image
                  src={item.img}
                  alt={item.text}
                  className="rounded-xl object-cover object-top brightness-100 transition-all duration-300 group-hover:brightness-75"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  fill
                  priority
                />

                <div className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-slate-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ArrowUpRightIcon className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 px-2">
                <h3 className="relative text-base font-semibold tracking-tight before:absolute before:top-full before:left-0 before:mt-1.5 before:block before:h-1 before:w-full before:rounded-full before:bg-yellow-200/80">
                  {item.text}
                </h3>
                <ArrowRightIcon className="size-5" />
              </div>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                key={index}
                className="absolute inset-0"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button href={demoLink} target="_blank" color="slate">
            View more pages
            <ArrowUpRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
