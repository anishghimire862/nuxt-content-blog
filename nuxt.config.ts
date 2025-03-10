export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare_pages"
  },
  ssr: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/mdc',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
  ],
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
      title: 'Home',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'A complete technical blog solution. Discover blogs on Artificial Intelligence (AI), NodeJS, NuxtJS, AdonisJS, VueJS, and more.' }
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