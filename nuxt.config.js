export default {
  target: 'static',
  dev: process.env.NODE_ENV !== 'production',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jonas-Dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to my Portfolio - FrontEnd Developer - BackEnd Developer' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/jk-dev.ico' }
    ],
    script: [
      {
        type: 'text/javascript',
        src: '/script.js',
        body: true
      }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/pwa'
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module'
  ],

  styleResources: {
    scss: '@/assets/css/main.scss'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  /* pwa: {
    icon: false,
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    dest: 'public',
    swSrc: 'sw.js'
  }, */

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  }
}
