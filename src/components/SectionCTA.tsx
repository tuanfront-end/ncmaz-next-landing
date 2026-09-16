import React from 'react'
import { Button } from './Button'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { buyNowLink, demoLink } from '@/constant'

const SectionCTA = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl text-center">
        {/* A heading, not a paragraph: this is the largest type on the page
            and the closing section contributed nothing to the outline while it
            was a <p>. Preflight resets heading size and weight, so the classes
            below still decide how it renders. */}
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          That&apos;s probably enough for now. <br /> What are you waiting for?
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-x-5">
          <Button href={demoLink} target="_blank">
            View demo
            <ArrowUpRightIcon className="ml-2 size-4" />
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
      </div>
    </section>
  )
}

export default SectionCTA
