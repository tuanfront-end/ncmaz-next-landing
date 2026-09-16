// The canonical origin this landing page is served from. It is read at BUILD
// time, not request time: every route here is prerendered, so whatever this
// resolves to during `next build` is frozen into the canonical tag, og:url,
// og:image, sitemap.xml and robots.txt of the shipped output.
//
// That is why the localhost fallback warns instead of passing quietly. A
// production build that falls through to it tells crawlers the site lives on
// the machine that built it, which is worse than shipping no canonical at all.
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }

  // Set automatically on Vercel; covers a deploy where nobody read the README.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercel) return `https://${vercel}`

  // Prerendering runs across several worker processes, each of which evaluates
  // this module once. The flag keeps it to one line per worker instead of one
  // per route.
  const warned = '__ncmazSiteUrlWarned'
  if (
    process.env.NODE_ENV === 'production' &&
    !(globalThis as Record<string, unknown>)[warned]
  ) {
    ;(globalThis as Record<string, unknown>)[warned] = true
    console.warn(
      '[ncmaz] NEXT_PUBLIC_SITE_URL is not set — this build will publish ' +
        'http://localhost:3000 as its canonical URL, Open Graph URL, sitemap ' +
        'and robots host. Set it to your domain and rebuild before deploying.',
    )
  }
  return 'http://localhost:3000'
}

export const siteUrl = resolveSiteUrl()

export const buyNowLink =
  'https://themeforest.net/item/ncmaz-blog-news-magazine-nextjs-template/44412092'
export const demoLink = 'https://ncmaz-nextjs.vercel.app/'
export const changelogLink =
  'https://nghiaxchis.gitbook.io/ncmaz-nextjs-blog-magazine-template/change-log/change-log'
