<script lang="ts" setup>
import { formatDate } from '@vueuse/core'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()

const { slug } = route.params
const { data: blog, error } = await useAsyncData<Blog>('blog', () =>
  queryCollection('blog').where('slug', '=', slug).first()
)

if (error.value) {
  console.error('Error fetching blogs:', error.value)
}

if (blog.value) {
  const author = computed(() =>
    blog.value?.authorSlug ? getAuthorDetails(blog.value.authorSlug) : null
  )
  useHead({
    title: blog.value.title,
    meta: [
      { name: 'description', content: blog.value.description },

      { property: 'og:title', content: blog.value.title },
      { property: 'og:description', content: blog.value.description },
      {
        property: 'og:image',
        content: `${runtimeConfig.public.domain}${blog.value.banner}`,
      },
      {
        property: 'og:url',
        content: `${runtimeConfig.public.domain}/blog/${blog.value.slug}`,
      },
      { property: 'og:type', content: 'article' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: blog.value.title },
      { name: 'twitter:description', content: blog.value.description },
      {
        name: 'twitter:image',
        content: `${runtimeConfig.public.domain}${blog.value.banner}`,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `${runtimeConfig.public.domain}/blog/${blog.value.slug}`,
      },
      {
        rel: 'sitemap',
        type: 'application/xml',
        href: `${runtimeConfig.public.domain}/sitemap.xml`,
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: blog.value.title,
          description: blog.value.description,
          image: `${runtimeConfig.public.domain}${blog.value.banner}`,
          url: `${runtimeConfig.public.domain}/blog/${blog.value.slug}`,
          author: {
            '@type': 'Person',
            name: author.value?.name || 'Anish Ghimire',
          },
          datePublished: blog.value.posted,
          publisher: {
            '@type': 'Organization',
            name: `${runtimeConfig.public.name}`,
            logo: {
              '@type': 'ImageObject',
              url: `${runtimeConfig.public.domain}/sarvalekh.png`,
            },
          },
        }),
      },
    ],
  })
}
</script>

<template>
  <div v-if="blog" class="space-y-8 mt-8 p-4">
    <div class="flex justify-center">
      <h1
        class="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
      >
        {{ blog.title }}
      </h1>
    </div>

    <div class="mx-auto max-w-3xl space-y-8">
      <div
        v-if="blog.banner"
        class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden"
      >
        <NuxtImg
          class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          :alt="blog.bannerAlt"
          :src="blog.banner"
          loading="lazy"
          :placeholder="[1280, 720]"
          densities="x1 x2"
          format="webp"
          quality="80"
          fit="cover"
          preload
          width="1280"
          height="720"
        />
      </div>

      <ContentRenderer class="prose max-w-full" :value="blog" />
      <div class="flex items-center space-x-2 justify-between">
        <Author :author-slug="`anish-ghimire`" />
        <div class="text-xs text-gray-500">
          {{ formatDate(new Date(blog.posted), 'MMM D, YYYY') }}
        </div>
      </div>
    </div>
  </div>
</template>
