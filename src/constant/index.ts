// The canonical origin this landing page is served from. Set
// NEXT_PUBLIC_SITE_URL in the deployment environment; the fallback keeps
// metadata, the sitemap and robots.txt resolvable when running locally.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const buyNowLink =
  'https://themeforest.net/item/ncmaz-blog-news-magazine-nextjs-template/44412092'
export const demoLink = 'https://ncmaz-nextjs.vercel.app/'
export const changelogLink =
  'https://nghiaxchis.gitbook.io/ncmaz-nextjs-blog-magazine-template/change-log/change-log'
