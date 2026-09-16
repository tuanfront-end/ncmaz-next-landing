import Image from 'next/image'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
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
    text: 'Home 1',
    link: 'https://ncmaz-nextjs.vercel.app/',
  },
  {
    img: home2Img,
    text: 'Home 2',
    link: 'https://ncmaz-nextjs.vercel.app/home-2',
  },
  {
    img: home3Img,
    text: 'Home 3',
    link: 'https://ncmaz-nextjs.vercel.app/home-3',
  },
  {
    img: home4Img,
    text: 'Home 4',
    link: 'https://ncmaz-nextjs.vercel.app/home-4',
  },

  {
    img: home5Img,
    text: 'Home 5',
    link: 'https://ncmaz-nextjs.vercel.app/home-5',
  },
  {
    img: submissionImg,
    text: 'FE Submission editor',
    link: 'https://ncmaz-nextjs.vercel.app/submission',
  },
]

export function SectionShowcase() {
  return (
    <section className="relative bg-slate-50 pt-20 pb-28 sm:py-32" id="demos">
      <GridPattern id="showcase-grid" className="opacity-60" />

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
              <div className="relative aspect-14/16 w-full overflow-hidden rounded-3xl border-8 border-zinc-100">
                <Image
                  src={item.img}
                  alt={item.text}
                  className="rounded-xl object-cover object-top brightness-100 transition-[filter] duration-300 group-hover:brightness-75 motion-reduce:transition-none"
                  // The grid is 1/2/3 columns at 640/1024, and `max-w-7xl`
                  // freezes the card at 368px once the container caps out, so
                  // nothing above 828w is ever the right candidate. No
                  // `priority`: the LCP element is the hero headline, and
                  // preloading six below-fold cards only starved it.
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 30vw, 368px"
                  placeholder="blur"
                  fill
                />

                <div className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-slate-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none">
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
                className="absolute inset-0"
              >
                {/* The heading above is a sibling of this link, so it cannot
                    name it. Without this the card is an unlabelled link. */}
                <span className="sr-only">View the {item.text} demo</span>
              </Link>
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
