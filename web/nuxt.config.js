export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sotsuten2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap' }
    ],
    script: [
      {
        hid: 'twitter',
        type: 'text/javascript',
        src: '//platform.twitter.com/widgets.js',
        async: true,
        defer: true,
        body: true
      }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'normalize.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/ngrok',
    '@aceforth/nuxt-optimized-images',
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    extend(config, ctx){
      config.output.publicPath = ''
    }
    */
  },

  server: {
    port: 8000, // デフォルト: 3000
    //host: '0.0.0.0' // デフォルト: localhost
  },

  router: {
    base: "/sotsuten2021/"
  }

}
