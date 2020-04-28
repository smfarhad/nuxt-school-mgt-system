export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'School Management System',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
      }, {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css'
      },
      {
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css"
      }
    ],
    script: [

    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/styles/main.css",
    "~/assets/styles/versions.css",
    "~/assets/styles/responsive.css",
    "~/assets/styles/custom.css",

  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/date-filter.js',
    "~/plugins/auth/firebase.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/vuetify',
    '@nuxtjs/axios'

  ],
  axios: {
    baseURL: process.env.BASE_URL || "https://nuxtjs-schoolmgtsystem.firebaseio.com",
    credentials: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  dev: true,
  env: {
    baseUrl: process.env.BASE_URL || "https://nuxtjs-schoolmgtsystem.firebaseio.com"
  },
  router: {
    //middleware: 'log'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
};
