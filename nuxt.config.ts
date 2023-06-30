// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'opinionated nuxt',
      meta: [
        {
          name: 'description',
          content: 'an opinionated nuxt starter template',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/oink.svg',
        },
      ],
    },
  },

  modules: ['@vueuse/nuxt', '@unocss/nuxt'],

  css: [
    '@unocss/reset/tailwind.css',
    'vue-toast-notification/dist/theme-sugar.css',
  ],

  imports: {
    imports: [
      {
        name: 'nanoid',
        from: 'nanoid',
      },
      {
        name: 'consola',
        from: 'consola',
      },
    ],
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  vite: {
    define: {
      'window.global': 'globalThis',
    },
    build: {
      target: 'esnext',
    },
  },

  devtools: { enabled: true },
})
