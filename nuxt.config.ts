export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare_pages"
  },
  ssr: true,
  modules: ['@nuxtjs/sitemap', '@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/mdc', '@nuxt/icon', '@nuxt/image', 'shadcn-nuxt'],
  content: {
    build: {
      markdown: {
        highlight: false
      },
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    public: {
      name: 'Sarva Lekh',
      domain: 'https://sarvalekh.com',
    }
  },
  app: {
    head: {
      title: 'Technical Blogs on AI, NodeJS, VueJS & More',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Discover blogs on AI, NodeJS, NuxtJS, VueJS, AdonisJS, Bash scripting, and software development. Learn from personal experiences and industry insights.' },

        { property: 'og:title', content: 'Technical Blogs on AI, NodeJS, VueJS & More' },
        { property: 'og:description', content: 'Discover blogs on AI, NodeJS, NuxtJS, VueJS, AdonisJS, Bash scripting, and software development.' },
        { property: 'og:image', content: '/sarvalekh.png' },
        { property: 'og:url', content: 'https://sarvalekh.com' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Technical Blogs on AI, NodeJS, VueJS & More' },
        { name: 'twitter:description', content: 'Discover blogs on AI, NodeJS, NuxtJS, VueJS, AdonisJS, Bash scripting, and software development.' },
        { name: 'twitter:image', content: '/sarvalekh.png' }

      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
})