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
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
    }
  },
})