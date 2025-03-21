import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'blog/**',
        schema: z.object({
          title: z.string(),
          slug: z.string(),
          description: z.string(),
          authorSlug: z.string(),
          published: z.boolean(),
          posted: z.string(),
          banner: z.string(),
          bannerAlt: z.string(),
          tags: z.array(z.string()),
          featured: z.boolean(),
        })
      }),
    ),
  },
})
