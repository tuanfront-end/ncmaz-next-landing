import { type MetadataRoute } from 'next'

import { siteUrl } from '@/constant'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // No `lastModified`: every route here is prerendered, so `new Date()`
      // would freeze the build timestamp and claim the page changed then —
      // which is not what it means. Omitting it is valid and honest.
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
