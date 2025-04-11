export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare_pages"
  },
  ssr: true,
  modules: [
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/mdc',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    'nuxt-gtag'
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark'
        }
      },
    },
    renderer: {
      anchorLinks: true
    }
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  gtag: {
    id: 'G-0ZZ5KJG1J5',
    initMode: 'manual',
    initCommands: [
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'granted',
        wait_for_update: 500,
      }]
    ]

  },
  runtimeConfig: {
    public: {
      name: 'Sarva Lekh',
      domain: 'https://sarvalekh.com',
    }
  },
  app: {
    head: {
      title: 'Technical Blogs on AI, Software Development & More',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Explore blogs on AI, software development, tutorials, and industry insights. Learn from personal experiences, tips, and expert advice for tech enthusiasts.' },

        { property: 'og:title', content: 'Technical Blogs on AI, Software Development & More' },
        { property: 'og:description', content: 'Explore blogs on AI, software development, tutorials, and industry insights. Learn from personal experiences, tips, and expert advice for tech enthusiasts.' },
        { property: 'og:image', content: 'https://sarvalekh.com/sarvalekh.png' },
        { property: 'og:url', content: 'https://sarvalekh.com' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Technical Blogs on AI, Software Development & More' },
        { name: 'twitter:description', content: 'Explore blogs on AI, software development, tutorials, and industry insights. Learn from personal experiences, tips, and expert advice for tech enthusiasts.' },
        { name: 'twitter:image', content: 'https://sarvalekh.com/sarvalekh.png' }

      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
        },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          href: '/rss.xml',
          title: 'RSS Feed'
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
})
