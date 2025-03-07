import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        author: z.string(),
        published: z.boolean(),
        posted: z.string(),
      })
    }),
  },
})
