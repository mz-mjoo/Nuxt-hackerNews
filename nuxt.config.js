export default {
  ssr: false,
  head: {
    title: 'nuxt-project-01',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL : 'https://api.hnpwa.com/v0',
    proxy: true,
    proxyHeaders:false,
    credentials:false
  },
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }
  },
}
