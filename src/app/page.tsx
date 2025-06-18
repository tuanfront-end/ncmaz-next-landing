import Logo from "./logo";
import Link from "next/link";

const _buyLink =
  "https://themeforest.net/item/ncmaz-blog-news-magazine-nextjs-template/44412092";
const _demoLink = "https://ncmaz-nextjs.vercel.app/";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
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

      {/* Header */}
      <header className="flex items-center justify-between mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-7 py-6 px-4">
        <Logo />
        <div className="flex sm:gap-7 gap-4 flex-wrap ml-auto">
          <Link
            className="hover:underline font-medium"
            href={_buyLink}
            target="_blank"
          >
            Buy Now
          </Link>
          <Link
            className="hover:underline font-medium flex items-center gap-1.5"
            href={_demoLink}
            target="_blank"
          >
            View Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8 sm:mt-14 2xl:mt-20 mt-8 px-4">
        <h1 className="tracking-tight text-pretty text-6xl sm:text-8xl font-bold max-w-5xl">
          Ncmaz – Next.js & Tailwind CSS
        </h1>
        <div className="max-w-5xl mt-10 sm:text-3xl text-xl">
          <p className="leading-normal">
            Blog, News & Magazine Next.js template.
          </p>
          <p className="leading-normal mt-4">
            Ncmaz is built with the latest Next.js 15 (app router), TypeScript
            and Tailwind CSS 4. The template is carefully designed with high
            quality.
          </p>
        </div>
        <div className="sm:mt-16 2xl:mt-24 mt-10 flex-wrap flex sm:gap-4 gap-3">
          <Link
            href={_buyLink}
            target="_blank"
            className="rounded-full bg-black px-10 py-4 text-lg font-medium text-white shadow-xs hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Buy Now
          </Link>
          <Link
            href={_demoLink}
            target="_blank"
            className="rounded-full bg-white px-8 py-4 text-lg font-medium text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 flex items-center gap-1.5"
          >
            View Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-8 xl:mt-20 mt-14 px-4">
        <p className="text-sm text-zinc-500">
          © 2025 Booliitheme, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
