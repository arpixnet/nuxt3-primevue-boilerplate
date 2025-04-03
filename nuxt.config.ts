export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxtjs/color-mode'
  ],

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: "#FFC008",
              50: '#fffeea',
              100: '#fffbc5',
              200: '#fff785',
              300: '#ffed46',
              400: '#ffde1b',
              500: '#ffc008',
              600: '#e29200',
              700: '#bb6802',
              800: '#985008',
              900: '#7c410b',
              950: '#482100',
            },
            active: '#FFC008'
          }
        },
      },
    }
  },
  primevue: {
    importTheme: { from: '@/assets/themes/config.js' },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light'
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false, // Disable optimization
    },
    locales: [
      { code: 'es', language: 'es-ES', file: 'es.json' },
      // { code: 'en', language: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'es',
    lazy: true,
    strategy: 'no_prefix'
  },
  image: {
    format: ['webp'],
    provider: 'ipx',
    // domains: ['example.com']
  },
  app: {
    head: {
      charset: 'utf-8',
      templateParams: {
        separator: '|',
      },
    },
  },

  runtimeConfig: {
    public: {
      exampleConfig: 'This is an example configuration value'
    }
  }
})